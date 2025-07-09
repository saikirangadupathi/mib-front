import React, { useState } from 'react';
import { 
  Calendar, 
  Users, 
  Activity, 
  Target, 
  TrendingUp, 
  Clock, 
  MessageSquare,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  AlertCircle,
  XCircle,
  X,
  ChevronLeft,
  ChevronRight,
  User,
  Send,
  Smile,
  Edit3,
  MoreHorizontal,
  Reply,
  ThumbsUp,
  ArrowLeft,
  Heart,
  Trash2,
  Edit,
  Flag
} from 'lucide-react';

const Dashboard = () => {
  const [showTeamModal, setShowTeamModal] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedSprint, setSelectedSprint] = useState(null);
  const [activeTab, setActiveTab] = useState('pm');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [newComment, setNewComment] = useState('');
  const [showReactionPicker, setShowReactionPicker] = useState(null);
  const [replyingTo, setReplyingTo] = useState(null);
  const [editingComment, setEditingComment] = useState(null);
  const [editText, setEditText] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(null);
  const [showMoreActions, setShowMoreActions] = useState(null);
  const [comments, setComments] = useState({});

  const allTeamMembers = [
    { name: "KL Das", role: "Engineering Manager", avatar: "KD", status: "online" },
    { name: "Vijay", role: "Senior Developer", avatar: "V", status: "online" },
    { name: "Kiran", role: "Full Stack Developer", avatar: "K", status: "away" },
    { name: "Chakravarthi", role: "Backend Developer", avatar: "C", status: "online" },
    { name: "Naseem", role: "Frontend Developer", avatar: "N", status: "offline" },
    { name: "Hamza", role: "DevOps Engineer", avatar: "H", status: "online" },
    { name: "Hamid", role: "QA Engineer", avatar: "HM", status: "online" },
    { name: "Samarth", role: "UI/UX Designer", avatar: "S", status: "away" },
    { name: "Lova", role: "Product Manager", avatar: "L", status: "online" },
    { name: "Shreanshu", role: "Tech Lead", avatar: "SH", status: "online" },
    { name: "Chirag", role: "Senior Developer", avatar: "CH", status: "online" },
    { name: "Khaitan", role: "Junior Developer", avatar: "KH", status: "offline" }
  ];

  const sprintData = [
    {
      id: 1,
      name: "TEDaas-SecurityToken-Sprint-4",
      status: "Slightly Behind",
      progress: 65,
      team: ["Vijay", "Kiran", "Chakravarthi", "Naseem"],
      dueDate: "Jul 11th",
      jiraLink: "#",
      description: "Implementing security token authentication system with OAuth2 integration",
      tasks: [
        { name: "OAuth2 Integration", assignee: "Vijay", status: "In Progress", progress: 80 },
        { name: "Token Validation", assignee: "Kiran", status: "Completed", progress: 100 },
        { name: "Security Testing", assignee: "Chakravarthi", status: "Pending", progress: 30 },
        { name: "UI Components", assignee: "Naseem", status: "In Progress", progress: 60 }
      ]
    },
    {
      id: 2,
      name: "TEDaas-SecurityToken-Sprint-5",
      status: "On Track",
      progress: 45,
      team: ["Hamza", "Hamid", "Samarth", "Lova"],
      dueDate: "Jul 18th",
      jiraLink: "#",
      description: "Advanced security features and performance optimization",
      tasks: [
        { name: "Performance Optimization", assignee: "Hamza", status: "In Progress", progress: 50 },
        { name: "Security Audit", assignee: "Hamid", status: "Pending", progress: 20 },
        { name: "User Experience", assignee: "Samarth", status: "In Progress", progress: 70 },
        { name: "Product Requirements", assignee: "Lova", status: "Completed", progress: 100 }
      ]
    },
    {
      id: 3,
      name: "HCYV2 Sprint 3",
      status: "Slightly Behind",
      progress: 70,
      team: ["Shreanshu", "Chirag", "Khaitan"],
      dueDate: "Jul 25th",
      jiraLink: "#",
      description: "Healthcare system version 2 core functionality development",
      tasks: [
        { name: "Core API Development", assignee: "Shreanshu", status: "In Progress", progress: 85 },
        { name: "Database Migration", assignee: "Chirag", status: "Completed", progress: 100 },
        { name: "Frontend Integration", assignee: "Khaitan", status: "Pending", progress: 25 }
      ]
    },
    {
      id: 4,
      name: "HCYV2 Sprint 4",
      status: "At Risk",
      progress: 30,
      team: ["Chirag", "Khaitan"],
      dueDate: "Aug 1st",
      jiraLink: "#",
      description: "Advanced healthcare features and reporting system",
      tasks: [
        { name: "Reporting System", assignee: "Chirag", status: "Pending", progress: 40 },
        { name: "Advanced Features", assignee: "Khaitan", status: "Pending", progress: 20 }
      ]
    }
  ];

  // Initialize comments state
  React.useEffect(() => {
    const initialComments = {
      1: {
        pm: [
          {
            id: 1,
            author: "Lova Raju",
            avatar: "L",
            time: new Date('2025-07-09T11:12:00'),
            content: "Can you clarify the OAuth2 implementation timeline?",
            reactions: [{ emoji: "🔍", count: 2, users: ["Vijay", "Kiran"] }],
            replies: [
              {
                id: 11,
                author: "Vijay Kumar",
                avatar: "V",
                time: new Date('2025-07-09T11:30:00'),
                content: "Timeline should be achievable by end of week. Working on integration tests now.",
                reactions: [{ emoji: "👍", count: 1, users: ["Lova Raju"] }],
                replies: []
              }
            ],
            liked: false,
            likeCount: 3,
            likes: 0,
            likedBy: []
          },
          {
            id: 2,
            author: "KL Das",
            avatar: "KD",
            time: new Date('2025-07-09T14:30:00'),
            content: "Timeline looks achievable with current resource allocation. Minor adjustments needed for security testing phase.",
            reactions: [{ emoji: "👍", count: 3, users: ["Lova", "Vijay", "Kiran"] }],
            replies: [],
            liked: true,
            likeCount: 5,
            likes: 2,
            likedBy: ["Vijay", "Hamza"]
          }
        ],
        em: [
          {
            id: 3,
            author: "KL Das",
            avatar: "KD",
            time: new Date('2025-07-09T10:45:00'),
            content: "Architecture review completed. The OAuth2 integration approach looks solid. Minor design adjustments needed for token validation.",
            reactions: [{ emoji: "✅", count: 2, users: ["Vijay", "Chakravarthi"] }],
            replies: [
              {
                id: 31,
                author: "Chakravarthi",
                avatar: "C",
                time: new Date('2025-07-09T11:00:00'),
                content: "Agreed on the architecture. Should we schedule a technical review session?",
                reactions: [],
                replies: []
              }
            ],
            liked: false,
            likeCount: 2,
            likes: 1,
            likedBy: ["Vijay"]
          },
          {
            id: 4,
            author: "Vijay Kumar",
            avatar: "V",
            time: new Date('2025-07-09T13:15:00'),
            content: "Working on the integration. Should have the initial implementation ready by tomorrow.",
            reactions: [{ emoji: "🚀", count: 1, users: ["KL Das"] }],
            replies: [],
            liked: true,
            likeCount: 4,
            likes: 0,
            likedBy: []
          }
        ]
      },
      2: {
        pm: [
          {
            id: 5,
            author: "Lova Raju",
            avatar: "L",
            time: new Date('2025-07-08T15:20:00'),
            content: "Stakeholder alignment meeting scheduled for next week. Initial feedback is positive.",
            reactions: [{ emoji: "👍", count: 2, users: ["KL Das", "Hamza"] }],
            replies: [],
            liked: false,
            likeCount: 2,
            likes: 1,
            likedBy: ["KL Das"]
          }
        ],
        em: [
          {
            id: 6,
            author: "KL Das",
            avatar: "KD",
            time: new Date('2025-07-08T14:10:00'),
            content: "Initial setup phase progressing well. All dependencies have been identified and documented.",
            reactions: [{ emoji: "📋", count: 1, users: ["Hamza"] }],
            replies: [],
            liked: false,
            likeCount: 1,
            likes: 0,
            likedBy: []
          }
        ]
      }
    };
    setComments(initialComments);
  }, []);

  const availableEmojis = ['👍', '❤️', '😊', '🎉', '🚀', '✅', '🔍', '💡', '⚡', '🔥'];

  const handleLike = (commentId, isReply = false, parentId = null) => {
    if (!selectedSprint) return;
    
    const currentComments = comments[selectedSprint] || { pm: [], em: [] };
    const updatedComments = { ...currentComments };
    
    if (isReply && parentId) {
      updatedComments[activeTab] = updatedComments[activeTab].map(comment => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: comment.replies.map(reply => {
              if (reply.id === commentId) {
                const currentLikes = reply.likes || 0;
                const hasLiked = reply.likedBy?.includes('current-user') || false;
                return {
                  ...reply,
                  likes: hasLiked ? currentLikes - 1 : currentLikes + 1,
                  likedBy: hasLiked 
                    ? (reply.likedBy || []).filter(user => user !== 'current-user')
                    : [...(reply.likedBy || []), 'current-user']
                };
              }
              return reply;
            })
          };
        }
        return comment;
      });
    } else {
      updatedComments[activeTab] = updatedComments[activeTab].map(comment => {
        if (comment.id === commentId) {
          const currentLikes = comment.likes || 0;
          const hasLiked = comment.likedBy?.includes('current-user') || false;
          return {
            ...comment,
            likes: hasLiked ? currentLikes - 1 : currentLikes + 1,
            likedBy: hasLiked 
              ? (comment.likedBy || []).filter(user => user !== 'current-user')
              : [...(comment.likedBy || []), 'current-user']
          };
        }
        return comment;
      });
    }
    
    setComments(prev => ({
      ...prev,
      [selectedSprint]: updatedComments
    }));
  };

  const handleReaction = (commentId, emoji, isReply = false, parentId = null) => {
    if (!selectedSprint) return;
    
    const currentComments = comments[selectedSprint] || { pm: [], em: [] };
    const updatedComments = { ...currentComments };
    
    if (isReply && parentId) {
      updatedComments[activeTab] = updatedComments[activeTab].map(comment => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: comment.replies.map(reply => {
              if (reply.id === commentId) {
                const reactions = reply.reactions || [];
                const existingReaction = reactions.find(r => r.emoji === emoji);
                
                if (existingReaction) {
                  const hasReacted = existingReaction.users?.includes('current-user') || false;
                  if (hasReacted) {
                    existingReaction.count = Math.max(0, existingReaction.count - 1);
                    existingReaction.users = existingReaction.users.filter(user => user !== 'current-user');
                  } else {
                    existingReaction.count += 1;
                    existingReaction.users = [...(existingReaction.users || []), 'current-user'];
                  }
                } else {
                  reactions.push({ emoji, count: 1, users: ['current-user'] });
                }
                
                return { ...reply, reactions: reactions.filter(r => r.count > 0) };
              }
              return reply;
            })
          };
        }
        return comment;
      });
    } else {
      updatedComments[activeTab] = updatedComments[activeTab].map(comment => {
        if (comment.id === commentId) {
          const reactions = comment.reactions || [];
          const existingReaction = reactions.find(r => r.emoji === emoji);
          
          if (existingReaction) {
            const hasReacted = existingReaction.users?.includes('current-user') || false;
            if (hasReacted) {
              existingReaction.count = Math.max(0, existingReaction.count - 1);
              existingReaction.users = existingReaction.users.filter(user => user !== 'current-user');
            } else {
              existingReaction.count += 1;
              existingReaction.users = [...(existingReaction.users || []), 'current-user'];
            }
          } else {
            reactions.push({ emoji, count: 1, users: ['current-user'] });
          }
          
          return { ...comment, reactions: reactions.filter(r => r.count > 0) };
        }
        return comment;
      });
    }
    
    setComments(prev => ({
      ...prev,
      [selectedSprint]: updatedComments
    }));
    setShowReactionPicker(null);
  };

  const quickReactions = [
    { emoji: "🎉", label: "Looks good!" },
    { emoji: "👋", label: "Need help?" },
    { emoji: "🚫", label: "This is blocked..." },
    { emoji: "🔍", label: "Can you clarify...?" },
    { emoji: "✅", label: "Done" }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'On Track': return 'text-green-600 bg-green-50';
      case 'Slightly Behind': return 'text-yellow-600 bg-yellow-50';
      case 'At Risk': return 'text-red-600 bg-red-50';
      case 'Completed': return 'text-green-600 bg-green-50';
      case 'In Progress': return 'text-blue-600 bg-blue-50';
      case 'Pending': return 'text-gray-600 bg-gray-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'On Track': return <CheckCircle2 className="w-4 h-4" />;
      case 'Slightly Behind': return <AlertCircle className="w-4 h-4" />;
      case 'At Risk': return <XCircle className="w-4 h-4" />;
      case 'Completed': return <CheckCircle2 className="w-4 h-4" />;
      case 'In Progress': return <Clock className="w-4 h-4" />;
      case 'Pending': return <Clock className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getStatusIndicator = (status) => {
    const colors = {
      online: 'bg-green-500',
      away: 'bg-yellow-500',
      offline: 'bg-gray-400'
    };
    return colors[status] || 'bg-gray-400';
  };

  const formatTimeAgo = (date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    });
  };

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      days.push(date);
    }
    return days;
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const newCommentObj = {
      id: Date.now(),
      author: "KL Das", // Current user
      avatar: "KD",
      time: new Date(),
      content: newComment.trim(),
      reactions: [],
      replies: [],
      liked: false,
      likeCount: 0
    };

    if (replyingTo) {
      // Add as reply
      setComments(prev => {
        const updated = { ...prev };
        const sprintComments = updated[selectedSprint];
        const findAndAddReply = (commentsList) => {
          return commentsList.map(comment => {
            if (comment.id === replyingTo) {
              return {
                ...comment,
                replies: [...comment.replies, newCommentObj]
              };
            }
            if (comment.replies.length > 0) {
              return {
                ...comment,
                replies: findAndAddReply(comment.replies)
              };
            }
            return comment;
          });
        };
        
        sprintComments[activeTab] = findAndAddReply(sprintComments[activeTab]);
        return updated;
      });
      setReplyingTo(null);
    } else {
      // Add as new comment
      setComments(prev => ({
        ...prev,
        [selectedSprint]: {
          ...prev[selectedSprint],
          [activeTab]: [...(prev[selectedSprint]?.[activeTab] || []), newCommentObj]
        }
      }));
    }

    setNewComment('');
  };

  const handleEditComment = (commentId, newContent) => {
    setComments(prev => {
      const updated = { ...prev };
      const sprintComments = updated[selectedSprint];
      
      const updateComment = (commentsList) => {
        return commentsList.map(comment => {
          if (comment.id === commentId) {
            return { ...comment, content: newContent };
          }
          if (comment.replies.length > 0) {
            return {
              ...comment,
              replies: updateComment(comment.replies)
            };
          }
          return comment;
        });
      };
      
      sprintComments[activeTab] = updateComment(sprintComments[activeTab]);
      return updated;
    });
    setEditingComment(null);
    setEditText('');
  };

  const handleDeleteComment = (commentId) => {
    if (confirm('Are you sure you want to delete this comment?')) {
      setComments(prev => {
        const updated = { ...prev };
        const sprintComments = updated[selectedSprint];
        
        const deleteComment = (commentsList) => {
          return commentsList.filter(comment => {
            if (comment.id === commentId) {
              return false;
            }
            if (comment.replies.length > 0) {
              comment.replies = deleteComment(comment.replies);
            }
            return true;
          });
        };
        
        sprintComments[activeTab] = deleteComment(sprintComments[activeTab]);
        return updated;
      });
    }
  };

  const startEdit = (comment) => {
    setEditingComment(comment.id);
    setEditText(comment.content);
  };

  const cancelEdit = () => {
    setEditingComment(null);
    setEditText('');
  };

  const renderComment = (comment, isReply = false) => (
    <div key={comment.id} className={`flex space-x-3 ${isReply ? 'ml-8 mt-3' : ''}`}>
      <div className="flex-shrink-0">
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-medium">{comment.avatar}</span>
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm">
          <span className="font-medium text-gray-900">{comment.author}</span>
          <span className="text-gray-500 ml-2">{formatTimeAgo(comment.time)}</span>
        </div>
        <div className="mt-1">
          {editingComment === comment.id ? (
            <div className="space-y-2">
              <textarea
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={2}
              />
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleEditComment(comment.id, editText)}
                  className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700"
                >
                  Save
                </button>
                <button
                  onClick={cancelEdit}
                  className="px-3 py-1 bg-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <p className="text-sm text-gray-700">{comment.content}</p>
          )}
        </div>
        
        {editingComment !== comment.id && (
          <div className="mt-2 flex items-center space-x-4">
            <button 
              onClick={() => setReplyingTo(comment.id)}
              className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <Reply className="w-4 h-4" />
              <span className="text-xs">Reply</span>
            </button>
            <button 
              onClick={() => handleLike(comment.id)}
              className={`flex items-center space-x-1 transition-colors ${
                comment.likedBy?.includes('current-user') 
                  ? 'text-red-500 hover:text-red-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <ThumbsUp className="w-4 h-4" />
              <span className="text-xs">
                {comment.likes > 0 ? `Like (${comment.likes})` : 'Like'}
              </span>
            </button>
            <div className="relative">
              <button 
                onClick={() => setShowReactionPicker(showReactionPicker === comment.id ? null : comment.id)}
                className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors relative"
              >
                <Smile className="w-4 h-4" />
                <span className="text-xs">React</span>
                
                {showReactionPicker === comment.id && (
                  <div className="absolute top-8 left-0 bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-10">
                    <div className="flex space-x-1">
                      {['👍', '❤️', '😊', '🎉', '🚀', '👏'].map((emoji) => (
                        <button
                          key={emoji}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleReaction(comment.id, emoji);
                          }}
                          className="p-1 hover:bg-gray-100 rounded text-lg"
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </button>
              {showEmojiPicker === comment.id && (
                <div className="absolute top-6 left-0 bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-10">
                  <div className="grid grid-cols-5 gap-1">
                    {availableEmojis.map(emoji => (
                      <button
                        key={emoji}
                        onClick={() => handleReaction(comment.id, emoji)}
                        className="p-1 hover:bg-gray-100 rounded text-lg"
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <button 
                onClick={() => setShowMoreActions(showMoreActions === comment.id ? null : comment.id)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <MoreHorizontal className="w-4 h-4" />
              </button>
              {showMoreActions === comment.id && (
                <div className="absolute top-6 right-0 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-10 min-w-32">
                  <button
                    onClick={() => {
                      startEdit(comment);
                      setShowMoreActions(null);
                    }}
                    className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                  >
                    <Edit className="w-4 h-4" />
                    <span>Edit</span>
                  </button>
                  <button
                    onClick={() => {
                      handleDeleteComment(comment.id);
                      setShowMoreActions(null);
                    }}
                    className="w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Delete</span>
                  </button>
                  <button
                    onClick={() => setShowMoreActions(null)}
                    className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                  >
                    <Flag className="w-4 h-4" />
                    <span>Report</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {comment.reactions && comment.reactions.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {comment.reactions.map((reaction, index) => (
              <button
                key={index}
                onClick={() => handleReaction(comment.id, reaction.emoji)}
                className={`flex items-center space-x-1 px-2 py-1 rounded-full transition-colors ${
                  reaction.users?.includes('current-user')
                    ? 'bg-blue-100 border border-blue-300 text-blue-700'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
                title={`Reacted by: ${reaction.users?.join(', ') || 'Unknown'}`}
              >
                <span className="text-base">{reaction.emoji}</span>
                <span className="text-xs text-gray-600">{reaction.count}</span>
              </button>
            ))}
          </div>
        )}

        {comment.replies && comment.replies.length > 0 && (
          <div className="mt-3 space-y-3">
            {comment.replies.map(reply => renderComment(reply, true))}
          </div>
        )}

        {replyingTo === comment.id && (
          <div className="mt-3 ml-8">
            <form onSubmit={handleCommentSubmit} className="space-y-2">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder={`Reply to ${comment.author}...`}
                className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={2}
                autoFocus
              />
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    setReplyingTo(null);
                    setNewComment('');
                  }}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Cancel
                </button>
                <div className="flex items-center space-x-2">
                  <button
                    type="submit"
                    disabled={!newComment.trim()}
                    className="flex items-center space-x-1 px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Reply</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );

  if (selectedSprint) {
    const sprint = sprintData.find(s => s.id === selectedSprint);
    const sprintComments = comments[selectedSprint] || { pm: [], em: [] };

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setSelectedSprint(null)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back to Dashboard</span>
                </button>
                <div className="h-6 w-px bg-gray-300"></div>
                <h1 className="text-2xl font-bold text-gray-900">{sprint.name}</h1>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(sprint.status)}`}>
                  {getStatusIcon(sprint.status)}
                  <span className="ml-1">{sprint.status}</span>
                </span>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Due: {sprint.dueDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sprint Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Sprint Overview */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Sprint Overview</h2>
                <p className="text-gray-600 mb-4">{sprint.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Overall Progress</p>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${sprint.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{sprint.progress}% complete</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Team Size</p>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-900">{sprint.team.length} members</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Task Breakdown */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Task Breakdown</h2>
                <div className="space-y-4">
                  {sprint.tasks.map((task, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium text-gray-900">{task.name}</h3>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                          {getStatusIcon(task.status)}
                          <span className="ml-1">{task.status}</span>
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-medium">{task.assignee.charAt(0)}</span>
                          </div>
                          <span className="text-sm text-gray-600">{task.assignee}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${task.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-500 w-8">{task.progress}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comments Section */}
              <div className="bg-white rounded-lg shadow-sm">
                <div className="border-b border-gray-200">
                  <div className="flex space-x-8 px-6">
                    <button
                      onClick={() => setActiveTab('pm')}
                      className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === 'pm'
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      PM Comments ({sprintComments.pm?.length || 0})
                    </button>
                    <button
                      onClick={() => setActiveTab('em')}
                      className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === 'em'
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      EM Comments ({sprintComments.em?.length || 0})
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  {/* Comment Input */}
                  {!replyingTo && (
                    <div className="mb-6">
                      <form onSubmit={handleCommentSubmit} className="space-y-4">
                        <div className="border border-gray-200 rounded-lg p-4">
                          <textarea
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Add a comment..."
                            className="w-full resize-none border-none outline-none text-gray-900 placeholder-gray-500"
                            rows={3}
                          />
                          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                            <div className="flex items-center space-x-2">
                              {quickReactions.map((reaction, index) => (
                                <button
                                  key={index}
                                  type="button"
                                  onClick={() => setNewComment(prev => prev + reaction.emoji)}
                                  className="flex items-center space-x-1 px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                                >
                                  <span>{reaction.emoji}</span>
                                  <span className="text-xs text-gray-600">{reaction.label}</span>
                                </button>
                              ))}
                            </div>
                            <div className="flex items-center space-x-2">
                              <button
                                type="submit"
                                disabled={!newComment.trim()}
                                className="flex items-center space-x-1 px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                              >
                                <Send className="w-4 h-4" />
                                <span>Send</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  )}

                  {/* Comments List */}
                  <div className="space-y-6">
                    {sprintComments[activeTab]?.length > 0 ? (
                      sprintComments[activeTab].map(comment => renderComment(comment))
                    ) : (
                      <div className="text-center py-8">
                        <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500">No comments yet. Be the first to comment!</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Team Members */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Team Members</h3>
                <div className="space-y-3">
                  {sprint.team.map((member, index) => {
                    const memberData = allTeamMembers.find(m => m.name === member);
                    return (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-medium">{member.charAt(0)}</span>
                          </div>
                          <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${getStatusIndicator(memberData?.status || 'offline')}`}></div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{member}</p>
                          <p className="text-xs text-gray-500">{memberData?.role || 'Developer'}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <button className="w-full flex items-center space-x-2 px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span>View in Jira</span>
                  </button>
                  <button className="w-full flex items-center space-x-2 px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors">
                    <Edit3 className="w-4 h-4" />
                    <span>Edit Sprint</span>
                  </button>
                  <button className="w-full flex items-center space-x-2 px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors">
                    <Users className="w-4 h-4" />
                    <span>Manage Team</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Click outside handlers */}
        {(showEmojiPicker || showMoreActions) && (
          <div 
            className="fixed inset-0 z-5" 
            onClick={() => {
              setShowEmojiPicker(null);
              setShowMoreActions(null);
            }}
          />
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Activity className="w-8 h-8 text-blue-600" />
                <h1 className="text-2xl font-bold text-gray-900">Mobius Engineering Process</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <button
                onClick={() => setShowTeamModal(true)}
                className="flex items-center space-x-1 hover:text-gray-900 transition-colors"
              >
                <Users className="w-4 h-4" />
                <span>KL Das</span>
              </button>
              <button
                onClick={() => setShowCalendar(true)}
                className="flex items-center space-x-1 hover:text-gray-900 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Wed Jul 09 2025</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Overall Understanding</p>
                <p className="text-2xl font-bold text-gray-900">B Level</p>
              </div>
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm text-gray-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>Target: A - 30/6/2025</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Sprints</p>
                <p className="text-2xl font-bold text-gray-900">4</p>
              </div>
              <Activity className="w-8 h-8 text-green-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm text-green-600">
                <CheckCircle2 className="w-4 h-4 mr-1" />
                <span>2 on track</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Team Members</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm text-gray-600">
                <Activity className="w-4 h-4 mr-1" />
                <span>Across 4 projects</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-gray-900">2</p>
              </div>
              <Calendar className="w-8 h-8 text-orange-600" />
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-1" />
                <span>Agentic Engineering</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sprint Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {sprintData.map((sprint) => (
            <div key={sprint.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer" onClick={() => setSelectedSprint(sprint.id)}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">{sprint.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(sprint.status)}`}>
                    {getStatusIcon(sprint.status)}
                    <span className="ml-1">{sprint.status}</span>
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm text-gray-900">{sprint.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${sprint.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{sprint.team.length} members</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Due: {sprint.dueDate}</span>
                  </div>
                </div>

                <div className="flex -space-x-2">
                  {sprint.team.slice(0, 4).map((member, index) => (
                    <div key={index} className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white">
                      <span className="text-white text-xs font-medium">{member.charAt(0)}</span>
                    </div>
                  ))}
                  {sprint.team.length > 4 && (
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center border-2 border-white">
                      <span className="text-white text-xs font-medium">+{sprint.team.length - 4}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Understanding Scale Legend */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Mobius Understanding Scale</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">A</span>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <p className="text-sm text-gray-600">Fully understand Mobius architecture and design detail to the minute detail</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">B</span>
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>
              <p className="text-sm text-gray-600">Fully understand Mobius architecture and design detail to the minute level</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">C</span>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              </div>
              <p className="text-sm text-gray-600">Still learning Mobius details but I can see I am close</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">D</span>
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
              <p className="text-sm text-gray-600">Don't understand much at all; need lots of help</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Modal */}
      {showTeamModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Team Members</h2>
              <button
                onClick={() => setShowTeamModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {allTeamMembers.map((member, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="relative">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium">{member.avatar}</span>
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${getStatusIndicator(member.status)}`}></div>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{member.name}</p>
                      <p className="text-sm text-gray-500">{member.role}</p>
                    </div>
                    <div className="text-xs text-gray-500 capitalize">{member.status}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Calendar Modal */}
      {showCalendar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <h2 className="text-lg font-semibold text-gray-900">
                  {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </h2>
                <button
                  onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <button
                onClick={() => setShowCalendar(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-7 gap-1 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {generateCalendarDays().map((date, index) => {
                  const isCurrentMonth = date.getMonth() === currentDate.getMonth();
                  const isToday = date.toDateString() === new Date().toDateString();
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentDate(date);
                        setShowCalendar(false);
                      }}
                      className={`p-2 text-sm rounded hover:bg-blue-50 transition-colors ${
                        isCurrentMonth ? 'text-gray-900' : 'text-gray-400'
                      } ${isToday ? 'bg-blue-600 text-white hover:bg-blue-700' : ''}`}
                    >
                      {date.getDate()}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;