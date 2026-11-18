/**
 * GOBEYOND TRAVELS — Unified Backend API Client
 * Connects Frontend to Node.js / Express Backend on Render
 * Automatically attaches JWT, handles real-time Socket.io, and falls back gracefully.
 */

(function () {
  'use strict';

  const getBackendOrigin = () => {
    if (window.GOBEYOND_API_URL) return window.GOBEYOND_API_URL.replace(/\/$/, '');
    try {
      const stored = localStorage.getItem('gobeyond_backend_url');
      if (stored) return stored.replace(/\/$/, '');
    } catch (e) {}

    const isLocalhost = ['localhost', '127.0.0.1'].includes(window.location.hostname) || window.location.protocol === 'file:';
    if (isLocalhost) {
      return 'http://localhost:5000';
    }
    // Connected to deployed Render backend:
    return 'https://frontend-project-2-way8.onrender.com';
  };

  const getBackendUrl = () => `${getBackendOrigin()}/api`;
  const API_BASE = getBackendUrl();
  const SOCKET_URL = getBackendOrigin();

  const getAuthToken = () => {
    try {
      return localStorage.getItem('gobeyond_token');
    } catch (e) {
      return null;
    }
  };

  const setAuthToken = (token) => {
    if (token) {
      localStorage.setItem('gobeyond_token', token);
    } else {
      localStorage.removeItem('gobeyond_token');
    }
  };

  async function apiRequest(endpoint, options = {}) {
    const url = `${API_BASE}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;
    const token = getAuthToken();

    const headers = {
      ...(options.headers || {})
    };

    if (!(options.body instanceof FormData)) {
      headers['Content-Type'] = 'application/json';
    }

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || `API error: ${response.status}`);
      }

      return data;
    } catch (err) {
      console.warn(`[GoBeyond API] ${endpoint} failed:`, err.message);
      throw err;
    }
  }

  // Socket.io Client Manager
  let socket = null;
  function getSocket() {
    if (!socket && window.io) {
      try {
        socket = window.io(SOCKET_URL);
        console.log('[Socket.io] Connected to GoBeyond real-time backend');
      } catch (err) {
        console.warn('[Socket.io] Failed to connect to server', err);
      }
    }
    return socket;
  }

  window.GoBeyondAPI = {
    BASE_URL: API_BASE,
    getAuthToken,
    setAuthToken,
    getSocket,

    // 1. Auth API
    auth: {
      login: async (email, password) => {
        const res = await apiRequest('/auth/login', {
          method: 'POST',
          body: JSON.stringify({ email, password })
        });
        if (res.token) setAuthToken(res.token);
        if (res.user) window.GoBeyond?.setCurrentUser(res.user);
        return res;
      },
      register: async (userData) => {
        const res = await apiRequest('/auth/register', {
          method: 'POST',
          body: JSON.stringify(userData)
        });
        if (res.token) setAuthToken(res.token);
        if (res.user) window.GoBeyond?.setCurrentUser(res.user);
        return res;
      },
      getMe: () => apiRequest('/auth/me'),
      logout: () => {
        setAuthToken(null);
        if (window.GoBeyond) window.GoBeyond.setCurrentUser(null);
      }
    },

    // 2. Destinations API
    destinations: {
      getAll: (params = {}) => {
        const q = new URLSearchParams(params).toString();
        return apiRequest(`/destinations${q ? '?' + q : ''}`);
      },
      getById: (id) => apiRequest(`/destinations/${id}`)
    },

    // 3. Guides API
    guides: {
      getAll: (params = {}) => {
        const q = new URLSearchParams(params).toString();
        return apiRequest(`/guides${q ? '?' + q : ''}`);
      },
      getById: (id) => apiRequest(`/guides/${id}`),
      apply: (formData) => apiRequest('/guides/apply', { method: 'POST', body: formData })
    },

    // 4. Bookings API
    bookings: {
      checkAvailability: (params) => {
        const q = new URLSearchParams(params).toString();
        return apiRequest(`/bookings/availability?${q}`);
      },
      create: (bookingData) => apiRequest('/bookings', { method: 'POST', body: JSON.stringify(bookingData) }),
      getMyBookings: () => apiRequest('/bookings'),
      getById: (id) => apiRequest(`/bookings/${id}`),
      cancel: (id, reason) => apiRequest(`/bookings/${id}/cancel`, { method: 'POST', body: JSON.stringify({ reason }) })
    },

    // 5. Crowd Density Engine
    crowd: {
      getAll: () => apiRequest('/crowd'),
      getStatus: (destId) => apiRequest(`/crowd/${destId}`),
      report: (data) => apiRequest('/crowd/report', { method: 'POST', body: JSON.stringify(data) }),
      onUpdate: (callback) => {
        const s = getSocket();
        if (s) {
          s.on('crowd:global_update', callback);
          s.on('crowd:update', callback);
        }
      }
    },

    // 6. Recommendation Engine
    recommendations: {
      get: (params = {}) => {
        const q = new URLSearchParams(params).toString();
        return apiRequest(`/recommendations${q ? '?' + q : ''}`);
      }
    },

    // 7. Routes & Transit
    routes: {
      getOptimization: (destId) => apiRequest(`/routes/${destId}`),
      getMultiStop: (destinationIds) => apiRequest('/routes/multi-stop', {
        method: 'POST',
        body: JSON.stringify({ destinationIds })
      })
    },

    // 8. Reviews
    reviews: {
      getByDestination: (destId) => apiRequest(`/reviews/destination/${destId}`),
      add: (reviewData) => apiRequest('/reviews', { method: 'POST', body: JSON.stringify(reviewData) }),
      reply: (reviewId, reply) => apiRequest(`/reviews/${reviewId}/reply`, {
        method: 'POST',
        body: JSON.stringify({ reply })
      })
    },

    // 9. Payments
    payments: {
      createOrder: (bookingId) => apiRequest('/payments/create-order', {
        method: 'POST',
        body: JSON.stringify({ bookingId })
      }),
      verify: (paymentData) => apiRequest('/payments/verify', {
        method: 'POST',
        body: JSON.stringify(paymentData)
      }),
      getWallet: () => apiRequest('/payments/wallet')
    },

    // 10. Notifications
    notifications: {
      getAll: () => apiRequest('/notifications'),
      markAsRead: (id = 'all') => apiRequest(`/notifications/${id}/read`, { method: 'PATCH' }),
      onNew: (callback) => {
        const s = getSocket();
        if (s) s.on('notification:new', callback);
      }
    },

    // 11. Admin API
    admin: {
      getMetrics: () => apiRequest('/admin/metrics'),
      getPendingGuides: () => apiRequest('/admin/guides/pending'),
      verifyGuide: (guideId, verificationStatus, badgeTier) => apiRequest(`/guides/${guideId}/status`, {
        method: 'PATCH',
        body: JSON.stringify({ verificationStatus, badgeTier })
      }),
      toggleBlockUser: (userId, isBlocked) => apiRequest(`/admin/users/${userId}/block`, {
        method: 'PATCH',
        body: JSON.stringify({ isBlocked })
      })
    },

    // 12. AI Engine
    ai: {
      chat: (message, history = []) => apiRequest('/ai/chat', {
        method: 'POST',
        body: JSON.stringify({ message, history })
      }),
      generateItinerary: (data) => apiRequest('/ai/itinerary', {
        method: 'POST',
        body: JSON.stringify(data)
      }),
      summarizeReviews: (destId) => apiRequest(`/ai/reviews-summary/${destId}`)
    }
  };
})();
