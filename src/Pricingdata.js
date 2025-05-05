const PricingData = [
    {
      title: 'Basic Plan',
      description: 'Teachers exploring the platform or with minimal usage needs',
      price: 'FREE',
      features: [
        { label: 'Planning studio (Limited)', included: true },
        { label: 'Teaching studio (Limited)', included: true },
        { label: 'Content Lab', included: false },
        { label: 'Command desk', included: false },
        { label: 'Growth Hub', included: false },
        { label: 'Avatar Hub', included: false },
        { label: '5 images/month, 0 min video', included: true },
        { label: 'Max 5 lesson plans & quizzes/month', included: true },
        { label: 'No content export', included: false },
      ],
    },
    {
      title: 'Pro Plan',
      description: 'Subject teachers managing weekly content, assessments, and visuals',
      price: '$5/month or $50/year',
      features: [
        { label: 'Planning studio', included: true },
        { label: 'Teaching studio', included: true },
        { label: 'Content Lab', included: true },
        { label: 'Command desk', included: false },
        { label: 'Growth Hub', included: true },
        { label: 'Avatar Hub', included: true },
        { label: '20 images/month, 5 min video', included: true },
        { label: 'Addon: $1 per 10 extra images, $2 per extra video minute', included: true },
      ],
    },
    {
      title: 'Master Plan',
      description: 'Full-time/advanced teachers using AI end-to-end',
      price: '$10/month or $100/year',
      features: [
        { label: 'Planning studio', included: true },
        { label: 'Teaching studio', included: true },
        { label: 'Content Lab', included: true },
        { label: 'Command desk', included: true },
        { label: 'Growth Hub', included: true },
        { label: 'Avatar Hub', included: true },
        { label: '60 images/month, 15 min video', included: true },
        { label: 'Addon: $2 per 10 extra images, $4 per extra 10 video minutes', included: true },
      ],
    }
  ];
  
  export default PricingData;
  