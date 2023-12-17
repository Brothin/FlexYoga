import yogaGoldIcon from "@services/yoga-gold.png";
import yogaWhiteIcon from "@services/yoga-white.png";
/* Service Data Array */
const serviceData = [
  {
    title: "Yoga",
    activeIcon: yogaWhiteIcon,
    inActiveIcon: yogaGoldIcon,
  },
];

/* Cards Data Array */
const cardsData = [
  [
    // Courses under Yoga service
    {
      header: "Professional Classes",
      price: "Rs 500/- INR",
      buttonText: "Book now",
      className: "standard",
      cardContainer: "Yoga",
      elements: [
        "In-person Yoga",
        "For the duration of 1 month",
        "4 sessions per week",
        "Learn advance yoga poses",
        "Cultivate inner peace & mindfulness",
      ],
    },
  ],
];

export { cardsData, serviceData };
