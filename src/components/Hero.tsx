import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, Smartphone } from 'lucide-react'

const Hero = () => {
  const scrollToFeatures = () => {
    const element = document.getElementById('features')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center water-waves pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Stay{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Hydrated
              </span>
              ,<br />
              Stay Healthy
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Track your daily water intake, receive smart reminders, and visualize your hydration journey with HydraTrack. The simplest way to build a healthy hydration habit.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4 rounded-xl"
              >
                <Smartphone size={24} className="mr-2" />
                App Store
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Play size={24} className="mr-2" />
                Google Play
              </Button>
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              onClick={scrollToFeatures}
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
            >
              Learn more about features
              <ArrowRight size={20} className="ml-2" />
            </motion.button>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              {/* Phone Frame */}
              <div className="relative w-72 h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-4 shadow-2xl">
                {/* Screen */}
                <div className="w-full h-full bg-gradient-to-b from-blue-50 to-blue-100 rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="h-6 bg-primary/10 flex items-center justify-between px-6 text-xs font-medium text-primary">
                    <span>9:41</span>
                    <span>100%</span>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-6 h-full flex flex-col">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-primary mb-2">Today's Goal</h3>
                      <div className="text-4xl font-bold text-secondary mb-4">1.8L / 2.5L</div>
                      
                      {/* Progress Circle */}
                      <div className="relative w-32 h-32 mx-auto mb-6">
                        <svg className="w-32 h-32 transform -rotate-90">
                          <circle
                            cx="64"
                            cy="64"
                            r="56"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            className="text-blue-200"
                          />
                          <circle
                            cx="64"
                            cy="64"
                            r="56"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 56}`}
                            strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.72)}`}
                            className="text-primary"
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary">72%</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Water Glasses */}
                    <div className="grid grid-cols-4 gap-3 mb-6">
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 1 + i * 0.1 }}
                          className={`w-12 h-16 rounded-lg border-2 ${
                            i < 6 
                              ? 'bg-gradient-to-t from-primary to-secondary border-primary' 
                              : 'bg-transparent border-gray-300'
                          } relative overflow-hidden`}
                        >
                          {i < 6 && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: '100%' }}
                              transition={{ delay: 1.5 + i * 0.1, duration: 0.3 }}
                              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-secondary opacity-80"
                            />
                          )}
                        </motion.div>
                      ))}
                    </div>
                    
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl">
                      Add Glass
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  x: [0, 10, 0] 
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-secondary to-primary rounded-full shadow-lg"
              />
              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  x: [0, -8, 0] 
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-2 -left-6 w-6 h-6 bg-gradient-to-br from-accent to-secondary rounded-full shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero