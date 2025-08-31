import { motion } from 'framer-motion'
import { Circle } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>,
      title: 'Set Your Daily Goal',
      description: 'Enter your personal details and let HydraTrack calculate your optimal daily water intake based on your body weight, activity level, and environmental factors.',
      image: 'Goal Setting'
    },
    {
      icon: <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>,
      title: 'Get Smart Reminders',
      description: 'Receive personalized notifications throughout the day that adapt to your schedule and drinking patterns. Never miss a hydration moment again.',
      image: 'Smart Notifications'
    },
    {
      icon: <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>,
      title: 'Track Your Progress',
      description: 'Log each glass with a simple tap and watch your progress grow. View detailed analytics and celebrate your hydration achievements.',
      image: 'Progress Tracking'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const stepVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              HydraTrack
            </span>{' '}
            Works
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Getting started with better hydration is simple. Follow these three easy steps to transform your daily water intake habits.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-20"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center mb-6"
                >
                  <div className="text-primary mr-4">
                    {step.icon}
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary to-secondary"></div>
                </motion.div>

                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {step.description}
                </p>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20"
                >
                  <span className="text-primary font-medium">
                    Step {index + 1} of 3
                  </span>
                </motion.div>
              </div>

              {/* Visual */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} flex justify-center`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  {/* Phone Mockup */}
                  <div className="w-64 h-[520px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
                    {/* Screen */}
                    <div className="w-full h-full bg-gradient-to-b from-blue-50 to-blue-100 rounded-[2rem] overflow-hidden relative">
                      {/* Status Bar */}
                      <div className="h-6 bg-primary/10 flex items-center justify-between px-6 text-xs font-medium text-primary">
                        <span>9:41</span>
                        <span>100%</span>
                      </div>
                      
                      {/* Step-specific Content */}
                      <div className="p-6 h-full flex flex-col items-center justify-center">
                        {index === 0 && (
                          <>
                            <div className="text-center mb-8">
                              <h4 className="text-xl font-bold text-primary mb-4">Set Your Goal</h4>
                              <div className="space-y-4">
                                <div className="bg-white rounded-lg p-4 shadow-sm">
                                  <div className="text-sm text-gray-600 mb-1">Body Weight</div>
                                  <div className="text-lg font-semibold">70 kg</div>
                                </div>
                                <div className="bg-white rounded-lg p-4 shadow-sm">
                                  <div className="text-sm text-gray-600 mb-1">Activity Level</div>
                                  <div className="text-lg font-semibold">Moderate</div>
                                </div>
                                <div className="bg-primary rounded-lg p-4 text-white">
                                  <div className="text-sm opacity-90 mb-1">Recommended Goal</div>
                                  <div className="text-xl font-bold">2.5L / day</div>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                        
                        {index === 1 && (
                          <>
                            <div className="text-center mb-8">
                              <h4 className="text-xl font-bold text-primary mb-4">Smart Reminders</h4>
                              <div className="space-y-3">
                                {['9:00 AM', '12:30 PM', '3:00 PM', '6:00 PM'].map((time, i) => (
                                  <motion.div
                                    key={time}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                    className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm"
                                  >
                                    <span className="text-sm font-medium">{time}</span>
                                    <div className="w-4 h-4 bg-gradient-to-br from-primary to-secondary rounded-full"></div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </>
                        )}
                        
                        {index === 2 && (
                          <>
                            <div className="text-center mb-8">
                              <h4 className="text-xl font-bold text-primary mb-4">Track Progress</h4>
                              <div className="relative w-24 h-24 mx-auto mb-4">
                                <svg className="w-24 h-24 transform -rotate-90">
                                  <circle
                                    cx="48"
                                    cy="48"
                                    r="40"
                                    stroke="currentColor"
                                    strokeWidth="6"
                                    fill="none"
                                    className="text-blue-200"
                                  />
                                  <motion.circle
                                    cx="48"
                                    cy="48"
                                    r="40"
                                    stroke="currentColor"
                                    strokeWidth="6"
                                    fill="none"
                                    strokeDasharray={`${2 * Math.PI * 40}`}
                                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.85)}`}
                                    className="text-primary"
                                    strokeLinecap="round"
                                    initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                                    animate={{ strokeDashoffset: 2 * Math.PI * 40 * (1 - 0.85) }}
                                    transition={{ duration: 2, ease: "easeOut" }}
                                  />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <span className="text-lg font-bold text-primary">85%</span>
                                </div>
                              </div>
                              <div className="text-2xl font-bold text-secondary mb-2">2.1L / 2.5L</div>
                              <div className="text-sm text-gray-600">Keep it up! Almost there!</div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                    className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-accent to-secondary rounded-full shadow-lg"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 border border-primary/20">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Hydration Habits?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of users who have already improved their health with HydraTrack. Start your journey today!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('download')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 shadow-lg"
            >
              Download HydraTrack Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks