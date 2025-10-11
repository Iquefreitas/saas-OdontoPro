import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
import { subscriptionPlans } from '@/utils/plans/index'
import { SubscriptionButton } from './subscription-button'

export function GridPlans() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
      {subscriptionPlans.map((plan, index) => (
        <Card
          key={plan.id}
          className={`flex flex-col w-full mx-auto shadow-lg 
            ${index === 1 ? 'border-2 border-emerald-500 overflow-hidden' : ''}`}
        >

          <CardHeader>
            <CardTitle className='text-2xl md:text-3xl font-semibold text-emerald-600'>
              {plan.name}
            </CardTitle>
            <CardDescription className='text-base'>
              {plan.description}
            </CardDescription>
          </CardHeader>

          <CardContent className='flex-grow'>
            <ul className='space-y-2'>
              {plan.features.map((feature, index) => (
                <li key={index} className='text-sm md:text-base flex items-start'>
                  <span className='text-emerald-500 mr-2'>✓</span> {feature}
                </li>
              ))}
            </ul>

            <div className='mt-6 pt-4 border-t'>
              <p className='text-gray-500 line-through text-lg'>{plan.oldPrice}</p>
              <p className='text-black text-4xl font-semibold'>{plan.price}</p>
            </div>

          </CardContent>
          <CardFooter>
            <SubscriptionButton
              type={plan.id === "BASIC" ? "BASIC" : "PROFESSIONAL"}
            />
          </CardFooter>
        </Card>
      ))}
    </section>
  )
}