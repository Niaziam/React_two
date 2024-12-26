import image1 from "../assets/images/image1.svg";
import image2 from "../assets/images/image2.svg";
import image3 from "../assets/images/image3.svg";
import image4 from "../assets/images/image4.svg";
import image5 from "../assets/images/image5.svg";
import image6 from "../assets/images/image6.svg";
import typeIcon from "../assets/images/icons/type.svg";
import aboutIcon from "../assets/images/icons/about.svg";
import locationIcon from "../assets/images/icons/location.svg";
import l1 from "../assets/images/location/l1.svg";
import l2 from "../assets/images/location/l2.svg";
import l3 from "../assets/images/location/l3.svg";

const incidentIcon = [typeIcon, aboutIcon, locationIcon];
const locationDataImage = [l1, l2, l3];

const blogData = [
  {
    id: 1,
    image: image1,
    title: "Whitechapel Rd.",
    description: "Tulare County,  Los Angles, CA 23415",
    price: "$1,456,654.00",
  },
  {
    id: 2,
    image: image2,
    title: "Whitechapel Rd.",
    description: "Tulare County,  Los Angles, CA 23415",
    price: "$1,456,654.00",
  },
  {
    id: 3,
    image: image3,
    title: "Whitechapel Rd.",
    description: "Tulare County,  Los Angles, CA 23415",
    price: "$1,456,654.00",
  },
  {
    id: 4,
    image: image4,
    title: "Whitechapel Rd.",
    description: "Tulare County,  Los Angles, CA 23415",
    price: "$1,456,654.00",
  },
  {
    id: 5,
    image: image5,
    title: "Whitechapel Rd.",
    description: "Tulare County,  Los Angles, CA 23415",
    price: "$1,456,654.00",
  },
  {
    id: 6,
    image: image6,
    title: "Whitechapel Rd.",
    description: "Tulare County,  Los Angles, CA 23415",
    price: "$1,456,654.00",
  },
];
const locationData = [
  {
    id: 1,
    image: locationDataImage[0],
    title: "Whitechapel Rd.",
    description: "Tulare County,  Los Angles, CA 23415",
    price: "$1,456,654.00",
  },
  {
    id: 2,
    image: locationDataImage[1],
    title: "Whitechapel Rd.",
    description: "Tulare County,  Los Angles, CA 23415",
    price: "$1,456,654.00",
  },
  {
    id: 3,
    image: locationDataImage[2],
    title: "Whitechapel Rd.",
    description: "Tulare County,  Los Angles, CA 23415",
    price: "$1,456,654.00",
  },
  {
    id: 4,
    image: locationDataImage[0],
    title: "Whitechapel Rd.",
    description: "Tulare County,  Los Angles, CA 23415",
    price: "$1,456,654.00",
  },
];
const incidentData = [
  {
    id: 1,
    icon: incidentIcon[0],
    title: "What type of incident?",
    description: "Choose the category that best describes the incident.",
  },
  {
    id: 2,
    icon: incidentIcon[1],
    title: "What type of incident?",
    description: "Choose the category that best describes the incident.",
  },
  {
    id: 3,
    icon: incidentIcon[2],
    title: "What type of incident?",
    description: "Choose the category that best describes the incident.",
  },
];

export { blogData, incidentData, locationData };
