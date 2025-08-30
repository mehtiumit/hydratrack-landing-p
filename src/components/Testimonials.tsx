import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Star } from '@phosphor-icons/react'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      name: 'Sarah Chen',
      title: 'Marketing Manager',
      rating: 5,
      text: 'HydraTrack has completely transformed how I think about hydration. The smart reminders are perfectly timed, and I love seeing my progress visualized. I\'ve never been this consistent with drinking water!',
      avatar: '👩‍💼'
    },
    {
      name: 'Marcus Rodriguez',
      title: 'Fitness Trainer',
      rating: 5,
      text: 'As a personal trainer, I recommend HydraTrack to all my clients. The goal customization based on activity level is spot-on, and the analytics help people understand their hydration patterns.',
      avatar: '👨‍🏋️'
    },
    {
      name: 'Emily Watson',
      title: 'Busy Mom',
      rating: 5,
      text: 'Between work and kids, I always forgot to drink enough water. HydraTrack\'s gentle reminders and quick logging make it so easy to stay hydrated. My energy levels have improved significantly!',
      avatar: '👩‍👧‍👦'
    },
    {
      name: 'David Kim',
      title: 'Software Developer',
      rating: 5,
      text: 'The interface is beautifully designed and incredibly intuitive. I appreciate how the app learns my patterns and adjusts reminders accordingly. It\'s like having a personal hydration coach.',
      avatar: '👨‍💻'
    },
    {
      name: 'Jessica Thompson',
      title: 'Yoga Instructor',
      rating: 5,
      text: 'HydraTrack aligns perfectly with my wellness philosophy. The calm, mindful approach to hydration tracking helps me maintain balance throughout the day. Highly recommended for anyone on a health journey.',
      avatar: '🧘‍♀️'
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Users Say
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of satisfied users who have transformed their hydration habits with HydraTrack.
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div 
            className="relative overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Card className="bg-background/60 backdrop-blur-sm border-border/50 shadow-xl">
                  <CardContent className="p-8 sm:p-12 text-center">
                    {/* Avatar */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                      className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-3xl mx-auto mb-6 shadow-lg"
                    >
                      {testimonials[currentTestimonial].avatar}
                    </motion.div>

                    {/* Stars */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="flex justify-center mb-6"
                    >
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + i * 0.1 }}
                        >
                          <Star size={24} weight="fill" className="text-yellow-400 mx-1" />
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Testimonial Text */}
                    <motion.blockquote
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-lg sm:text-xl text-foreground leading-relaxed mb-8 italic"
                    >
                      "{testimonials[currentTestimonial].text}"
                    </motion.blockquote>

                    {/* Author Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="font-semibold text-foreground text-lg">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-muted-foreground">
                        {testimonials[currentTestimonial].title}
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background shadow-lg"
            >
              <ChevronLeft size={20} />
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background shadow-lg"
            >
              <ChevronRight size={20} />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-primary scale-125 shadow-lg'
                    : 'bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: '4.8', label: 'Average Rating', suffix: '★' },
            { number: '50K+', label: 'Happy Users', suffix: '' },
            { number: '95%', label: 'Would Recommend', suffix: '' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-2xl bg-background/60 backdrop-blur-sm border border-border/50"
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              Ready to Join Our Community?
            </h3>
            <p className="text-muted-foreground mb-6">
              Start your hydration journey today and experience the difference HydraTrack can make.
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
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-xl font-semibold transition-colors duration-200 shadow-lg"
            >
              Download Now - It's Free!
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials