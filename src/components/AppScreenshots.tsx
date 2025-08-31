import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const AppScreenshots = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const screenshots = [
    {
      title: 'Daily Dashboard',
      description: 'Track your progress with beautiful, intuitive charts',
      image: '/api/placeholder/300/600',
      features: ['Progress visualization', 'Daily goals', 'Quick add buttons']
    },
    {
      title: 'Smart Reminders',
      description: 'Personalized notifications to keep you hydrated',
      image: '/api/placeholder/300/600',
      features: ['Custom schedules', 'Activity-based alerts', 'Gentle nudges']
    },
    {
      title: 'History & Analytics',
      description: 'Comprehensive insights into your hydration patterns',
      image: '/api/placeholder/300/600',
      features: ['Weekly trends', 'Monthly reports', 'Achievement tracking']
    },
    {
      title: 'Goal Setting',
      description: 'Personalized targets based on your lifestyle',
      image: '/api/placeholder/300/600',
      features: ['Body weight calculator', 'Activity adjustments', 'Climate factors']
    },
    {
      title: 'Profile & Settings',
      description: 'Customize your hydration experience',
      image: '/api/placeholder/300/600',
      features: ['Personal preferences', 'Notification settings', 'Units & measurements']
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  return (
    <section id="screenshots" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            See{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              HydraTrack
            </span>{' '}
            in Action
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the beautiful, intuitive interface designed to make hydration tracking a delightful daily habit.
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Carousel */}
          <div 
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5 p-8"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Content */}
                <div className="order-2 lg:order-1">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl sm:text-3xl font-bold text-foreground mb-4"
                  >
                    {screenshots[currentSlide].title}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg text-muted-foreground mb-6"
                  >
                    {screenshots[currentSlide].description}
                  </motion.p>

                  <motion.ul
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-3 mb-8"
                  >
                    {screenshots[currentSlide].features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-center text-foreground"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                {/* Phone Mockup */}
                <div className="order-1 lg:order-2 flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="relative"
                  >
                    {/* Phone Frame */}
                    <div className="w-64 h-[520px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
                      {/* Screen */}
                      <div className="w-full h-full bg-gradient-to-b from-blue-50 to-blue-100 rounded-[2rem] overflow-hidden">
                        {/* Placeholder for actual screenshot */}
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                          <div className="text-center p-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                              <div className="w-8 h-8 bg-white rounded-full"></div>
                            </div>
                            <h4 className="font-semibold text-primary mb-2">
                              {screenshots[currentSlide].title}
                            </h4>
                            <div className="text-sm text-muted-foreground">
                              Screen {currentSlide + 1} of {screenshots.length}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background"
            >
              <ChevronLeft size={20} />
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background"
            >
              <ChevronRight size={20} />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-primary scale-125'
                    : 'bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>

          {/* Thumbnail Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4"
          >
            {screenshots.map((screenshot, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  index === currentSlide
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/50 bg-card'
                }`}
              >
                <div className="text-sm font-medium text-foreground mb-1">
                  {screenshot.title}
                </div>
                <div className="text-xs text-muted-foreground">
                  Screen {index + 1}
                </div>
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AppScreenshots