import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Droplets, Bell, TrendingUp, Target } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Droplets size={48} />,
      title: 'Track Your Intake',
      description: 'Easily log every glass of water with a simple tap. Visual progress tracking keeps you motivated throughout the day.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Bell size={48} />,
      title: 'Smart Reminders',
      description: 'Personalized notifications based on your schedule and activity level. Never forget to hydrate again.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <TrendingUp size={48} />,
      title: 'Hydration History',
      description: 'Comprehensive charts and analytics to track your hydration patterns over time. Identify trends and improve your habits.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Target size={48} />,
      title: 'Custom Goals',
      description: 'Set personalized daily water intake goals based on your body weight, activity level, and climate conditions.',
      color: 'from-orange-500 to-orange-600'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
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
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Stay Hydrated
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            HydraTrack combines smart technology with simple design to make hydration tracking effortless and engaging.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="h-full bg-card hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <motion.div
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 }
                    }}
                    className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { number: '50K+', label: 'Active Users' },
            { number: '2M+', label: 'Glasses Tracked' },
            { number: '4.8★', label: 'App Store Rating' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-card to-muted/30"
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features