import React from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import GlassCard from './ui/GlassCard';
import Badge from './ui/Badge';
import ProgressRing from './ui/ProgressRing';
import { dashboardData } from '../data/dashboard';
import { useScrollReveal, revealVariants, staggerContainer } from '../hooks/useScrollReveal';

const Dashboard: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-effect border border-glass-border rounded-lg p-3">
          <p className="font-body text-xs text-muted mb-1">{label}</p>
          <p className="font-body text-sm text-white font-semibold">
            {payload[0].value} hours
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="dashboard" className="section-padding bg-navy-mid">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="space-y-8"
        >
          {/* Section Header */}
          <motion.div variants={revealVariants} className="text-center">
            <h2 className="font-display text-section font-bold text-white mb-4">
              Student Dashboard Preview
            </h2>
            <p className="font-body text-muted">
              Sign in to access your personalized learning dashboard
            </p>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            variants={revealVariants}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard className="p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      {dashboardData.greeting}, {dashboardData.userName} 👋
                    </h3>
                    <p className="font-body text-sm text-muted">
                      {new Date().toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                  <Badge variant="green" className="flex items-center gap-2">
                    🔥 {dashboardData.streak} Day Streak
                  </Badge>
                </div>
                <motion.button
                  className="px-6 py-2 glass-effect border border-green text-green font-body font-semibold rounded-lg hover:bg-green hover:text-navy transition-all focus-ring"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sign in to access →
                </motion.button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center space-y-3">
                  <ProgressRing
                    percentage={dashboardData.stats.lessonsCompleted.percentage}
                    size={80}
                    color="#5ce0f0"
                    className="mx-auto"
                  />
                  <div>
                    <div className="font-display text-xl font-bold text-white">
                      {dashboardData.stats.lessonsCompleted.current}/{dashboardData.stats.lessonsCompleted.total}
                    </div>
                    <div className="font-body text-xs text-muted">Lessons Completed</div>
                  </div>
                </div>

                <div className="text-center space-y-3">
                  <ProgressRing
                    percentage={dashboardData.stats.experimentsDone.percentage}
                    size={80}
                    color="#3dd68c"
                    className="mx-auto"
                  />
                  <div>
                    <div className="font-display text-xl font-bold text-white">
                      {dashboardData.stats.experimentsDone.current}/{dashboardData.stats.experimentsDone.total}
                    </div>
                    <div className="font-body text-xs text-muted">Experiments Done</div>
                  </div>
                </div>

                <div className="text-center space-y-3">
                  <ProgressRing
                    percentage={dashboardData.stats.weeklyStudy.percentage}
                    size={80}
                    color="#5ce0f0"
                    className="mx-auto"
                  />
                  <div>
                    <div className="font-display text-xl font-bold text-white">
                      {dashboardData.stats.weeklyStudy.current}
                    </div>
                    <div className="font-body text-xs text-muted">This Week Study</div>
                  </div>
                </div>

                <div className="text-center space-y-3">
                  <ProgressRing
                    percentage={dashboardData.stats.overallScore.percentage}
                    size={80}
                    color="#3dd68c"
                    className="mx-auto"
                  />
                  <div>
                    <div className="font-display text-xl font-bold text-white">
                      {dashboardData.stats.overallScore.current}%
                    </div>
                    <div className="font-body text-xs text-muted">Overall Score</div>
                  </div>
                </div>
              </div>

              {/* Progress Graph */}
              <div className="mb-8">
                <h4 className="font-display text-lg font-bold text-white mb-4">Weekly Study Time</h4>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={dashboardData.weeklyData}>
                      <defs>
                        <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3dd68c" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#3dd68c" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis 
                        dataKey="day" 
                        stroke="rgba(200,215,255,0.5)"
                        tick={{ fill: 'rgba(200,215,255,0.5)', fontSize: 12 }}
                      />
                      <YAxis 
                        stroke="rgba(200,215,255,0.5)"
                        tick={{ fill: 'rgba(200,215,255,0.5)', fontSize: 12 }}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Area
                        type="monotone"
                        dataKey="hours"
                        stroke="#5ce0f0"
                        fillOpacity={1}
                        fill="url(#colorHours)"
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Quick Access */}
              <div className="mb-8">
                <h4 className="font-display text-lg font-bold text-white mb-4">Quick Access</h4>
                <div className="flex flex-wrap gap-3">
                  {dashboardData.quickAccess.map((item, index) => (
                    <motion.button
                      key={index}
                      className="px-4 py-2 glass-effect border border-glass-border rounded-full text-white text-sm font-body hover:border-green hover:text-green transition-all focus-ring"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Recent Experiments */}
              <div>
                <h4 className="font-display text-lg font-bold text-white mb-4">Recent Experiments</h4>
                <div className="space-y-3">
                  {dashboardData.recentExperiments.map((experiment, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-4 glass-effect border border-glass-border rounded-lg"
                      whileHover={{ scale: 1.02, borderColor: 'var(--green)' }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-green/20 flex items-center justify-center">
                          <span className="text-green font-bold text-sm">✓</span>
                        </div>
                        <div>
                          <div className="font-body text-white font-medium">{experiment.name}</div>
                          <div className="font-body text-xs text-muted">
                            {experiment.subject} • {experiment.completionDate}
                          </div>
                        </div>
                      </div>
                      <Badge variant="green" size="sm">
                        {experiment.score}%
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Dashboard;
