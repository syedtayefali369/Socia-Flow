import React, { useState } from 'react';
import { Calendar, BarChart3, Users, TrendingUp, Clock, Plus, Edit, Trash2, Eye, Heart, MessageCircle, Share2, Search, Bell, Settings, Home, FileText, Zap } from 'lucide-react';

export default function SocialMediaDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [posts, setPosts] = useState([
    { id: 1, platform: 'Instagram', content: 'Check out our latest product launch! 🚀', scheduled: '2024-12-24 10:00', status: 'scheduled', engagement: { likes: 245, comments: 32, shares: 18 } },
    { id: 2, platform: 'Twitter', content: 'Excited to announce our new feature...', scheduled: '2024-12-23 14:30', status: 'published', engagement: { likes: 189, comments: 24, shares: 45 } },
    { id: 3, platform: 'Facebook', content: 'Join us for our upcoming webinar!', scheduled: '2024-12-25 09:00', status: 'scheduled', engagement: { likes: 0, comments: 0, shares: 0 } },
  ]);

  const [blogPosts] = useState([
    { id: 1, title: '10 Social Media Trends to Watch in 2025', excerpt: 'Stay ahead of the curve with these emerging trends...', views: 1234, date: 'Dec 20, 2024' },
    { id: 2, title: 'How to Boost Your Engagement Rate', excerpt: 'Proven strategies to increase your social media presence...', views: 2456, date: 'Dec 18, 2024' },
    { id: 3, title: 'Content Calendar Best Practices', excerpt: 'Plan your content like a pro with these tips...', views: 1890, date: 'Dec 15, 2024' },
  ]);

  const stats = [
    { icon: Users, label: 'Total Followers', value: '45.2K', change: '+12.5%', color: 'from-purple-500 to-pink-500' },
    { icon: TrendingUp, label: 'Engagement Rate', value: '8.4%', change: '+2.3%', color: 'from-blue-500 to-cyan-500' },
    { icon: Eye, label: 'Total Reach', value: '128K', change: '+18.7%', color: 'from-green-500 to-emerald-500' },
    { icon: Zap, label: 'Post Performance', value: '94%', change: '+5.2%', color: 'from-orange-500 to-red-500' },
  ];

  const platforms = [
    { name: 'Instagram', color: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500', followers: '18.5K' },
    { name: 'Twitter', color: 'bg-blue-400', followers: '12.3K' },
    { name: 'Facebook', color: 'bg-blue-600', followers: '9.8K' },
    { name: 'LinkedIn', color: 'bg-blue-700', followers: '4.6K' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                SocialFlow
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-64 hover:bg-white/10 transition-all"
                />
              </div>
              <button className="relative p-2 hover:bg-white/10 rounded-xl transition-all group">
                <Bell className="w-5 h-5 text-gray-300 group-hover:text-purple-400 transition-colors" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
              </button>
              <button className="p-2 hover:bg-white/10 rounded-xl transition-all group">
                <Settings className="w-5 h-5 text-gray-300 group-hover:text-purple-400 transition-colors" />
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <span className="text-white font-bold">JD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar */}
        <aside className="w-64 p-6 space-y-2">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all group ${
              activeTab === 'dashboard'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                : 'text-gray-300 hover:bg-white/5'
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </button>
          <button
            onClick={() => setActiveTab('schedule')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all group ${
              activeTab === 'schedule'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                : 'text-gray-300 hover:bg-white/5'
            }`}
          >
            <Calendar className="w-5 h-5" />
            <span className="font-medium">Schedule</span>
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all group ${
              activeTab === 'analytics'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                : 'text-gray-300 hover:bg-white/5'
            }`}
          >
            <BarChart3 className="w-5 h-5" />
            <span className="font-medium">Analytics</span>
          </button>
          <button
            onClick={() => setActiveTab('blog')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all group ${
              activeTab === 'blog'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                : 'text-gray-300 hover:bg-white/5'
            }`}
          >
            <FileText className="w-5 h-5" />
            <span className="font-medium">Blog</span>
          </button>

          {/* Connected Platforms */}
          <div className="pt-8">
            <h3 className="text-gray-400 text-sm font-semibold mb-3 px-4">CONNECTED PLATFORMS</h3>
            <div className="space-y-2">
              {platforms.map((platform) => (
                <div
                  key={platform.name}
                  className="flex items-center space-x-3 px-4 py-2 rounded-xl hover:bg-white/5 transition-all cursor-pointer group"
                >
                  <div className={`w-8 h-8 ${platform.color} rounded-lg`}></div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium">{platform.name}</p>
                    <p className="text-gray-400 text-xs">{platform.followers}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-white">Dashboard</h2>
                  <p className="text-gray-400 mt-1">Welcome back! Here's your overview</p>
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center space-x-2">
                  <Plus className="w-5 h-5" />
                  <span>Create Post</span>
                </button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-xl group-hover:scale-110 transition-transform`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-green-400 text-sm font-semibold">{stat.change}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Recent Posts */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-6">Recent Posts</h3>
                <div className="space-y-4">
                  {posts.map((post) => (
                    <div
                      key={post.id}
                      className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg"></div>
                          <div>
                            <p className="text-white font-medium">{post.platform}</p>
                            <p className="text-gray-400 text-sm flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {post.scheduled}
                            </p>
                          </div>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            post.status === 'published'
                              ? 'bg-green-500/20 text-green-400'
                              : 'bg-blue-500/20 text-blue-400'
                          }`}
                        >
                          {post.status}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-4">{post.content}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-gray-400 text-sm">
                          <span className="flex items-center space-x-1 hover:text-pink-400 transition-colors">
                            <Heart className="w-4 h-4" />
                            <span>{post.engagement.likes}</span>
                          </span>
                          <span className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
                            <MessageCircle className="w-4 h-4" />
                            <span>{post.engagement.comments}</span>
                          </span>
                          <span className="flex items-center space-x-1 hover:text-green-400 transition-colors">
                            <Share2 className="w-4 h-4" />
                            <span>{post.engagement.shares}</span>
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 hover:bg-white/10 rounded-lg transition-all">
                            <Edit className="w-4 h-4 text-blue-400" />
                          </button>
                          <button className="p-2 hover:bg-white/10 rounded-lg transition-all">
                            <Trash2 className="w-4 h-4 text-red-400" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'schedule' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-white">Content Schedule</h2>
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center space-x-2">
                  <Plus className="w-5 h-5" />
                  <span>Schedule Post</span>
                </button>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">
                <Calendar className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Calendar View Coming Soon</h3>
                <p className="text-gray-400">Plan and schedule your content across all platforms</p>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Analytics & Insights</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Engagement Over Time</h3>
                  <div className="h-48 flex items-end justify-between space-x-2">
                    {[65, 45, 78, 52, 89, 67, 95].map((height, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-lg hover:scale-105 transition-transform cursor-pointer" style={{ height: `${height}%` }}></div>
                    ))}
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Platform Performance</h3>
                  <div className="space-y-4">
                    {platforms.map((platform, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-300">{platform.name}</span>
                          <span className="text-white font-semibold">{85 - i * 10}%</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${platform.color} rounded-full transition-all duration-1000`}
                            style={{ width: `${85 - i * 10}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'blog' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-white">Blog & Monetization</h2>
                  <p className="text-gray-400 mt-1">Share insights and earn revenue</p>
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center space-x-2">
                  <Plus className="w-5 h-5" />
                  <span>New Article</span>
                </button>
              </div>

              {/* Blog Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Total Views</p>
                      <p className="text-3xl font-bold text-white">5,580</p>
                    </div>
                    <Eye className="w-10 h-10 text-purple-400" />
                  </div>
                  <p className="text-green-400 text-sm mt-2">+24.5% this month</p>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Published Posts</p>
                      <p className="text-3xl font-bold text-white">24</p>
                    </div>
                    <FileText className="w-10 h-10 text-blue-400" />
                  </div>
                  <p className="text-green-400 text-sm mt-2">+3 this week</p>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Revenue</p>
                      <p className="text-3xl font-bold text-white">$847</p>
                    </div>
                    <TrendingUp className="w-10 h-10 text-green-400" />
                  </div>
                  <p className="text-green-400 text-sm mt-2">+15.2% this month</p>
                </div>
              </div>

              {/* Blog Posts */}
              <div className="space-y-4">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-400 mb-4">{post.excerpt}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{post.views} views</span>
                          </span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity ml-4">
                        <button className="p-2 hover:bg-white/10 rounded-lg transition-all">
                          <Edit className="w-5 h-5 text-blue-400" />
                        </button>
                        <button className="p-2 hover:bg-white/10 rounded-lg transition-all">
                          <Trash2 className="w-5 h-5 text-red-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Monetization Info */}
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">💰 Monetization Opportunities</h3>
                <p className="text-gray-300 mb-4">
                  Earn through affiliate marketing, sponsored content, ad revenue, and premium subscriptions.
                </p>
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105">
                  Explore Revenue Streams
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}