export type TeamSection = "Dignitaries" | "Post Bearers" | "Members" | "Alumni";

export interface TeamPerson {
  name: string;
  role: string;
  image: string;
  classYear?: number;
  section: TeamSection;
}

export const academicYears = {
  fourthYear: 2027,
  thirdYear: 2028,
  secondYear: 2029,
} as const;

export const dignitaries: TeamPerson[] = [
  { name: "Prof. Aravind Choubey", role: "Director (Officiating)", section: "Dignitaries", image: "/media/Dignitaries/director_2023.jpg" },

  { name: "Mr. Sanjay Kumar", role: "Registrar (Officiating)", section: "Dignitaries", image: "/media/Dignitaries/sanjaykumarSir.png" },
  
  { name: "Dr. Irfan Ahmed", role: "Faculty Advisor", section: "Dignitaries", image: "/media/Dignitaries/Irfansir.png" },
  
  { name: "Prof. Tamal Mandal", role: "Faculty Advisor", section: "Dignitaries", image: "/media/Dignitaries/Tamalsir.png" }
];

export const postBearers: TeamPerson[] = [

  { name: "Ankit kumar", role: "President", section: "Post Bearers", classYear: 2027, image: "/media/Members/2027/Ankit1.jpg" },

  { name: "K.Mahesh Goud", role: "Vice President", section: "Post Bearers", classYear: 2027, image: "/media/Members/2027/Mahesh.jpg" },

  { name: "Saurabh Ojha", role: "General Secretary", section: "Post Bearers", classYear: 2027, image: "/media/Members/2027/Saurav.jpg" },

  { name: "L.Sirija", role: "Ass. General Secretary", section: "Post Bearers", classYear: 2027, image: "/media/Members/2027/Sirija.jpg" },

  { name: "Soloman Raj", role: "Treasurer", section: "Post Bearers", classYear: 2027, image: "/media/Members/2027/Soloman.jpg" },

  { name: "Nikita Shaw", role: "Convenor", section: "Post Bearers", classYear: 2027, image: "/media/Members/2027/nikita.jpg" },

  { name: "Shrestha Rana", role: "Executive Convenor", section: "Post Bearers", classYear: 2027, image: "/media/Members/2027/Shrestha.jpg" },

  { name: "Samudrika Ghosh", role: "Operation Head", section: "Post Bearers", classYear: 2027, image: "/media/Members/2027/Samudrika.jpg" },

  { name: "Nayanika Mondal", role: "GD Head", section: "Post Bearers", classYear: 2027, image: "/media/Members/2027/Nayanika.jpg" },

  { name: "Chaitanya Kumar Singh", role: "Editor In Cheif", section: "Post Bearers", classYear: 2027, image: "/media/Members/2027/Chaitanya.jpg" },

  { name: "Ashar Alam", role: "RnD Head", section: "Post Bearers", classYear: 2027, image: "/media/Members/2027/Ashar.jpg" },

  { name: "V.Madhuri", role: "Event Head", section: "Post Bearers", classYear: 2027, image: "/media/Members/2027/Madhuri.jpg" },

  { name: "Varsha Shaw", role: "Web-D Head", section: "Post Bearers", classYear: 2027, image: "/media/Members/2027/Varsha.jpg" },

  { name: "Mohinesh", role: "MultiMedia Head", section: "Post Bearers", classYear: 2027, image: "/media/Members/2027/Mohinesh.jpg" },

  {
    name: "Aniket Kesari", role: "Creative Head", section: "Post Bearers", classYear: 2027, image: "/media/Members/2027/aniket.jpg"
  },

  { name: "Ayan Sinha", role: "Logistics Head", section: "Post Bearers", classYear: 2027, image: "/media/Members/2027/Ayan1.jpg" },

  { name: "Ajay Kumar Verma", role: "Sponsorship Head", section: "Post Bearers", classYear: 2027, image: "/media/Members/2027/Ajay.jpg" },

  { name: "Althi Ganesh", role: "Team Member", section: "Post Bearers", classYear: 2027, image: "/media/Members/2027/ganesh.jpg" },

  { name: "C.Harshitha", role: "Team Member", section: "Post Bearers", classYear: 2027, image: "/media/Members/2027/harshitha.jpg" },
  { name: "Pradumna Mishra", role: "Team Member", section: "Post Bearers", classYear: 2027, image: "/media/Members/2027/Pradumna.jpg" },

  { name: "Pragna Sri", role: "Team Member", section: "Post Bearers", classYear: 2027, image: "/media/Members/2027/Pragna Sri.jpg" },

  { name: "Rohan Dey", role: "Team Member", section: "Post Bearers", classYear: 2027, image: "/media/Members/2027/Rohan.jpeg" },
 
];

export const classOf2027: TeamPerson[] = [
  { name: "Ajay Kumar Verma", role: "Team Member", section: "Members", classYear: 2027, image: "/media/Members/2027/Ajay.jpg" },

  { name: "Ankit kumar", role: "Team Member", section: "Members", classYear: 2027, image: "/media/Members/2027/Ankit1.jpg" },

  { name: "Ashar Alam", role: "Team Member", section: "Members", classYear: 2027, image: "/media/Members/2027/Ashar.jpg" },

  { name: "Ayan Sinha", role: "Team Member", section: "Members", classYear: 2027, image: "/media/Members/2027/Ayan1.jpg" },

  { name: "Chaitanya Kumar Singh", role: "Team Member", section: "Members", classYear: 2027, image: "/media/Members/2027/Chaitanya.jpg" },

  { name: "Althi Ganesh", role: "Team Member", section: "Members", classYear: 2027, image: "/media/Members/2027/ganesh.jpg" },

  { name: "C.Harshitha", role: "Team Member", section: "Members", classYear: 2027, image: "/media/Members/2027/harshitha.jpg" },

  { name: "V.Madhuri", role: "Team Member", section: "Members", classYear: 2027, image: "/media/Members/2027/Madhuri.jpg" },

  { name: "K.Mahesh Goud", role: "Team Member", section: "Members", classYear: 2027, image: "/media/Members/2027/Mahesh.jpg" },

  { name: "Mohinesh", role: "Team Member", section: "Members", classYear: 2027, image: "/media/Members/2027/Mohinesh.jpg" },

  { name: "Nayanika Mondal", role: "Team Member", section: "Members", classYear: 2027, image: "/media/Members/2027/Nayanika.jpg" },

  { name: "Nikita Shaw", role: "Team Member", section: "Members", classYear: 2027, image: "/media/Members/2027/nikita.jpg" },

  { name: "Pradumna Mishra", role: "Team Member", section: "Members", classYear: 2027, image: "/media/Members/2027/Pradumna.jpg" },

  { name: "Pragna Sri", role: "Team Member", section: "Members", classYear: 2027, image: "/media/Members/2027/Pragna Sri.jpg" },

  { name: "Rohan Dey", role: "Team Member", section: "Members", classYear: 2027, image: "/media/Members/2027/Rohan.jpeg" },

  { name: "Samudrika Ghosh", role: "Team Member", section: "Members", classYear: 2027, image: "/media/Members/2027/Samudrika.jpg" },

  { name: "Saurabh Ojha", role: "Team Member", section: "Members", classYear: 2027, image: "/media/Members/2027/Saurav.jpg" },

  { name: "Shrestha Rana", role: "Team Member", section: "Members", classYear: 2027, image: "/media/Members/2027/Shrestha.jpg" },

  { name: "L.Sirija", role: "Team Member", section: "Members", classYear: 2027, image: "/media/Members/2027/Sirija.jpg" },

  { name: "Soloman Raj", role: "Team Member", section: "Members", classYear: 2027, image: "/media/Members/2027/Soloman.jpg" },

  { name: "Varsha Shaw", role: "Team Member", section: "Members", classYear: 2027, image: "/media/Members/2027/Varsha.jpg" },
  {
    name: "Aniket Kesari", role: "Team Member", section: "Members", classYear: 2027, image: "/media/Members/2027/aniket.jpg"
  }
];

export const classOf2028: TeamPerson[] = [
  { name: "Aakash", role: "Sr. Coordinator", section: "Members", classYear: 2028, image: "/media/Members/2028/aakash.jpg" },

  { name: "Adarsh", role: "Sr. Coordinator", section: "Members", classYear: 2028, image: "/media/Members/2028/adarsh.jpg" },
  
  { name: "Akshay Reddy", role: "Sr. Coordinator", section: "Members", classYear: 2028, image: "/media/Members/2028/AKSHAY.jpg" },
  
  { name: "Apoorva", role: "Sr. Coordinator", section: "Members", classYear: 2028, image: "/media/Members/2028/apoorva.jpeg" },
  
  { name: "CHAITANYA", role: "Sr. Coordinator", section: "Members", classYear: 2028, image: "/media/Members/2028/CHAITANYA.jpg" },
  
  { name: "GAURAV", role: "Sr. Coordinator", section: "Members", classYear: 2028, image: "/media/Members/2028/GAURAV.jpg" },
  
  { name: "Kavya", role: "Sr. Coordinator", section: "Members", classYear: 2028, image: "/media/Members/2028/kavya.jpg" },
  
  { name: "Lolasri", role: "Sr. Coordinator", section: "Members", classYear: 2028, image: "/media/Members/2028/lolasri2.jpg" },
  
  { name: "Maneesha", role: "Sr. Coordinator", section: "Members", classYear: 2028, image: "/media/Members/2028/maneesha.jpeg" },
  
  { name: "Niharika", role: "Sr. Coordinator", section: "Members", classYear: 2028, image: "/media/Members/2028/niharika.jpg" },
  
  { name: "SAGAR", role: "Sr. Coordinator", section: "Members", classYear: 2028, image: "/media/Members/2028/SAGAR.png" },
  
  { name: "Sahil", role: "Sr. Coordinator", section: "Members", classYear: 2028, image: "/media/Members/2028/sahil.jpg" },
  
  { name: "Sashank", role: "Sr. Coordinator", section: "Members", classYear: 2028, image: "/media/Members/2028/SASANK.jpg" },
  
  { name: "Sravya", role: "Sr. Coordinator", section: "Members", classYear: 2028, image: "/media/Members/2028/sravya2.jpg" },
  
  { name: "Tolaram", role: "Sr. Coordinator", section: "Members", classYear: 2028, image: "/media/Members/2028/tolaram.jpg" }

];

export const classOf2029: TeamPerson[] = [
  { name: "Abhishek Kumar", role: "Jr. Coordinator", section: "Members", classYear: 2029, image: "/media/Members/2029/abhishek_kumar.jpg" },

  { name: "Akash Kumar", role: "Jr. Coordinator", section: "Members", classYear: 2029, image: "/media/Members/2029/akash.jpeg" },

  { name: "Bharat Prajapat", role: "Jr. Coordinator", section: "Members", classYear: 2029, image: "/media/Members/2029/bharat.jpg" },

  { name: "Magapu Joy", role: "Jr. Coordinator", section: "Members", classYear: 2029, image: "/media/Members/2029/joy.jpg" },

  { name: "Jyoti Kumari", role: "Jr. Coordinator", section: "Members", classYear: 2029, image: "/media/Members/2029/jyoti.jpg" },

  { name: "k. Kalyani Chowhan", role: "Jr. Coordinator", section: "Members", classYear: 2029, image: "/media/Members/2029/kalyani.jpg" },

  { name: "M. Kevin Joshua", role: "Jr. Coordinator", section: "Members", classYear: 2029, image: "/media/Members/2029/kevin.jpg" },

  { name: "Tungana Navya", role: "Jr. Coordinator", section: "Members", classYear: 2029, image: "/media/Members/2029/navya1.jpg" },

  { name: "Pratyaksh Raj", role: "Jr. Coordinator", section: "Members", classYear: 2029, image: "/media/Members/2029/pratyaksh.jpg" },

  { name: "Rishu Raj", role: "Jr. Coordinator", section: "Members", classYear: 2029, image: "/media/Members/2029/rishu.jpeg" },

  { name: "E. Varshith Sharma", role: "Jr. Coordinator", section: "Members", classYear: 2029, image: "/media/Members/2029/varshith.jpg" },
  
  { name: "E. Vinayak", role: "Jr. Coordinator", section: "Members", classYear: 2029, image: "/media/Members/2029/vinayak.jpg" }
];

export const alumni: TeamPerson[] = [
  { name: "Akhil Boyina", role: "Alumni", section: "Alumni", classYear: 2021, image: "/media/Members/2021/akhil boyina-min.jpeg" },
  { name: "Amartya Paul", role: "Alumni", section: "Alumni", classYear: 2021, image: "/media/Members/2021/amartya paul-min.jpeg" },
  { name: "Aur", role: "Alumni", section: "Alumni", classYear: 2021, image: "/media/Members/2021/aur.jpeg" },
  { name: "Biswas", role: "Alumni", section: "Alumni", classYear: 2021, image: "/media/Members/2021/biswas.jpeg" },
  { name: "Debojyoti Chaki", role: "Alumni", section: "Alumni", classYear: 2021, image: "/media/Members/2021/Debojyoti Chaki.jpg" },
  { name: "Dheeraj", role: "Alumni", section: "Alumni", classYear: 2021, image: "/media/Members/2021/dheeraj.jpg" },
  { name: "Ishika", role: "Alumni", section: "Alumni", classYear: 2021, image: "/media/Members/2021/ishika.jpg" },
  { name: "Murthy", role: "Alumni", section: "Alumni", classYear: 2021, image: "/media/Members/2021/murthy.jpeg" },
  { name: "Nishant", role: "Alumni", section: "Alumni", classYear: 2021, image: "/media/Members/2021/nishant.jpeg" },
  { name: "Prajat", role: "Alumni", section: "Alumni", classYear: 2021, image: "/media/Members/2021/prajat.jpg" },
  { name: "Sakchi", role: "Alumni", section: "Alumni", classYear: 2021, image: "/media/Members/2021/sakchi.jpg" },
  { name: "Sasiram", role: "Alumni", section: "Alumni", classYear: 2021, image: "/media/Members/2021/sasiram.jpeg" },
  { name: "Satya", role: "Alumni", section: "Alumni", classYear: 2021, image: "/media/Members/2021/satya.jpeg" },
  { name: "Sbd", role: "Alumni", section: "Alumni", classYear: 2021, image: "/media/Members/2021/sbd.jpeg" },
  { name: "Sugna", role: "Alumni", section: "Alumni", classYear: 2021, image: "/media/Members/2021/sugna.jpeg" },
  { name: "Sumanth", role: "Alumni", section: "Alumni", classYear: 2021, image: "/media/Members/2021/sumanth.jpeg" },
  { name: "Tanmay", role: "Alumni", section: "Alumni", classYear: 2021, image: "/media/Members/2021/tanmay.jpg" },
  { name: "Virat", role: "Alumni", section: "Alumni", classYear: 2021, image: "/media/Members/2021/virat.jpeg" },


  { name: "Abhi", role: "Alumni", section: "Alumni", classYear: 2022, image: "/media/Members/2022/abhi.jpeg" },
  { name: "Abhishek Raj", role: "Alumni", section: "Alumni", classYear: 2022, image: "/media/Members/2022/abhishek raj-min.jpeg" },
  { name: "Ankita Raj", role: "Alumni", section: "Alumni", classYear: 2022, image: "/media/Members/2022/Ankita raj-min.jpeg" },
  { name: "Arjya", role: "Alumni", section: "Alumni", classYear: 2022, image: "/media/Members/2022/arjya.jpeg" },
  { name: "Chandra Shekhar", role: "Alumni", section: "Alumni", classYear: 2022, image: "/media/Members/2022/chandra shekhar-min.jpeg" },
  { name: "Debakshi Gupta", role: "Alumni", section: "Alumni", classYear: 2022, image: "/media/Members/2022/Debakshi Gupta.jpg" },
  { name: "Inganti Kashyap", role: "Alumni", section: "Alumni", classYear: 2022, image: "/media/Members/2022/inganti kashyap-min.jpg" },
  { name: "K.Prathyusha", role: "Alumni", section: "Alumni", classYear: 2022, image: "/media/Members/2022/kasimalla prathyusha-min.jpeg" },
  { name: "Koushik Karmakar", role: "Alumni", section: "Alumni", classYear: 2022, image: "/media/Members/2022/koushik karmakar-min.jpeg" },
  { name: "Kritika Raman", role: "Alumni", section: "Alumni", classYear: 2022, image: "/media/Members/2022/kritika raman1-min.jpeg" },
  { name: "Linga", role: "Alumni", section: "Alumni", classYear: 2022, image: "/media/Members/2022/linga-min.jpeg" },
  { name: "Lipi Akansha", role: "Alumni", section: "Alumni", classYear: 2022, image: "/media/Members/2022/lipi akansha-min.jpeg" },
  { name: "Manoj Layek", role: "Alumni", section: "Alumni", classYear: 2022, image: "/media/Members/2022/manoj layek-min.jpeg" },
  { name: "Mohith", role: "Alumni", section: "Alumni", classYear: 2022, image: "/media/Members/2022/mohith-min.jpg" },
  { name: "Mondal", role: "Alumni", section: "Alumni", classYear: 2022, image: "/media/Members/2022/mondal.jpeg" },
  { name: "Prathiksha Patel", role: "Alumni", section: "Alumni", classYear: 2022, image: "/media/Members/2022/prathiksha patel-min.jpg" },
  { name: "Rittick Purkait", role: "Alumni", section: "Alumni", classYear: 2022, image: "/media/Members/2022/rittick purkait-min.jpeg" },
  { name: "Shivani", role: "Alumni", section: "Alumni", classYear: 2022, image: "/media/Members/2022/shivani.jpeg" },
  { name: "S. Rittika", role: "Alumni", section: "Alumni", classYear: 2022, image: "/media/Members/2022/somyajula rittika-min.jpeg" },
  { name: "Vinita Singh", role: "Alumni", section: "Alumni", classYear: 2022, image: "/media/Members/2022/vinita singh-min.jpeg" },
  { name: "Yamini Vithanala", role: "Alumni", section: "Alumni", classYear: 2022, image: "/media/Members/2022/yamini vithanala-min.jpeg" },


  { name: "Aarya", role: "Alumni", section: "Alumni", classYear: 2023, image: "/media/Members/2023/aarya.jpeg" },
  { name: "Amit", role: "Alumni", section: "Alumni", classYear: 2023, image: "/media/Members/2023/amit.jpeg" },
  { name: "Avi", role: "Alumni", section: "Alumni", classYear: 2023, image: "/media/Members/2023/avi.jpeg" },
  { name: "Ayush", role: "Alumni", section: "Alumni", classYear: 2023, image: "/media/Members/2023/ayush.jpeg" },
  { name: "Gaurav", role: "Alumni", section: "Alumni", classYear: 2023, image: "/media/Members/2023/gaurav.jpg" },
  { name: "Ghosh", role: "Alumni", section: "Alumni", classYear: 2023, image: "/media/Members/2023/ghosh.jpeg" },
  { name: "Niharika", role: "Alumni", section: "Alumni", classYear: 2023, image: "/media/Members/2023/niharika.jpeg" },
  { name: "Preethi", role: "Alumni", section: "Alumni", classYear: 2023, image: "/media/Members/2023/preethi.jpeg" },
  { name: "Saurav", role: "Alumni", section: "Alumni", classYear: 2023, image: "/media/Members/2023/saurav.jpeg" },
  { name: "Utsav", role: "Alumni", section: "Alumni", classYear: 2023, image: "/media/Members/2023/utsav.jpeg" },
  { name: "Vishal", role: "Alumni", section: "Alumni", classYear: 2023, image: "/media/Members/2023/vishal.jpg" },


  { name: "Abheerup", role: "Alumni", section: "Alumni", classYear: 2025, image: "/media/Members/2025/Abheerup.jpg" },
  { name: "Abhishek", role: "Alumni", section: "Alumni", classYear: 2025, image: "/media/Members/2025/Abhishek.jpg" },
  { name: "Achari", role: "Alumni", section: "Alumni", classYear: 2025, image: "/media/Members/2025/Achari3.jpg" },
  { name: "Akash", role: "Alumni", section: "Alumni", classYear: 2025, image: "/media/Members/2025/Akash3.jpg" },
  { name: "Ambar", role: "Alumni", section: "Alumni", classYear: 2025, image: "/media/Members/2025/Ambar.jpg" },
  { name: "Anish", role: "Alumni", section: "Alumni", classYear: 2025, image: "/media/Members/2025/Anish2.jpg" },
  { name: "Antara", role: "Alumni", section: "Alumni", classYear: 2025, image: "/media/Members/2025/Antara.jpg" },
  { name: "Ashish", role: "Alumni", section: "Alumni", classYear: 2025, image: "/media/Members/2025/Ashish.jpeg" },
  { name: "Bireshwar", role: "Alumni", section: "Alumni", classYear: 2025, image: "/media/Members/2025/Bireshwar.jpeg" },
  { name: "Hammad2", role: "Alumni", section: "Alumni", classYear: 2025, image: "/media/Members/2025/Hammad2.jpg" },
  { name: "HARSH", role: "Alumni", section: "Alumni", classYear: 2025, image: "/media/Members/2025/HARSH2.jpg" },
  { name: "Harshitha", role: "Alumni", section: "Alumni", classYear: 2025, image: "/media/Members/2025/Harshitha.jpeg" },
  { name: "Hriya", role: "Alumni", section: "Alumni", classYear: 2025, image: "/media/Members/2025/Hriya3.jpg" },
  { name: "Kalyani", role: "Alumni", section: "Alumni", classYear: 2025, image: "/media/Members/2025/Kalyani.jpg" },
  { name: "Kalyani", role: "Alumni", section: "Alumni", classYear: 2025, image: "/media/Members/2025/Kalyani2.jpg" },
  { name: "Menka", role: "Alumni", section: "Alumni", classYear: 2025, image: "/media/Members/2025/Menka.jpg" },
  { name: "Mohammad2", role: "Alumni", section: "Alumni", classYear: 2025, image: "/media/Members/2025/Mohammad2.jpg" },
  { name: "Namitha2", role: "Alumni", section: "Alumni", classYear: 2025, image: "/media/Members/2025/Namitha2.jpg" },
  { name: "Nikhil", role: "Alumni", section: "Alumni", classYear: 2025, image: "/media/Members/2025/Nikhil.jpg" },
  { name: "Picgrid", role: "Alumni", section: "Alumni", classYear: 2025, image: "/media/Members/2025/picgrid.jpeg" },
  { name: "Pithani", role: "Alumni", section: "Alumni", classYear: 2025, image: "/media/Members/2025/Pithani.jpg" },
  { name: "Rishi", role: "Alumni", section: "Alumni", classYear: 2025, image: "/media/Members/2025/Rishi.jpg" },
  { name: "Ronak", role: "Alumni", section: "Alumni", classYear: 2025, image: "/media/Members/2025/Ronak.jpeg" },
  { name: "RUPANI", role: "Alumni", section: "Alumni", classYear: 2025, image: "/media/Members/2025/RUPANI.jpg" },
  { name: "Sasisekhar", role: "Alumni", section: "Alumni", classYear: 2025, image: "/media/Members/2025/sasisekhar.jpg" },
  { name: "Satyajit", role: "Alumni", section: "Alumni", classYear: 2025, image: "/media/Members/2025/satyajit.jpg" },
  { name: "Satyavarapu", role: "Alumni", section: "Alumni", classYear: 2025, image: "/media/Members/2025/Satyavarapu.jpg" },
  { name: "Shambhu", role: "Alumni", section: "Alumni", classYear: 2025, image: "/media/Members/2025/Shambhu.jpg" },
  { name: "Shibangshu", role: "Alumni", section: "Alumni", classYear: 2025, image: "/media/Members/2025/Shibangshu.jpg" },
  { name: "Shubhajyoti", role: "Alumni", section: "Alumni", classYear: 2025, image: "/media/Members/2025/Shubhajyoti.jpg" },
  { name: "Yogesh", role: "Alumni", section: "Alumni", classYear: 2025, image: "/media/Members/2025/yogesh.jpg" },


  { name: "Shubham Kumar", role: "Alumni", section: "Alumni", classYear: 2026, image: "/media/Members/2026/Shubham.jpg"},
  { name: "A.S.Likhita", role: "Alumni", section: "Alumni", classYear: 2026, image: "/media/Members/2026/Likhita.jpg" },
  { name: "K.Jaswanth", role: "Alumni", section: "Alumni", classYear: 2026, image: "/media/Members/2026/Jaswanth.jpg" },
  { name: "Rohit Meena", role: "Alumni", section: "Alumni", classYear: 2026, image: "/media/Members/2026/rohit2.jpg" },
  { name: "Chitra Kumari", role: "Alumni", section: "Alumni", classYear: 2026, image: "/media/Members/2026/Chitra.jpg" },
  { name: "S.Lohith", role: "Alumni", section: "Alumni", classYear: 2026, image: "/media/Members/2026/lohith2.jpg" },
  { name: "Pranay Mukherjee", role: "Alumni", section: "Alumni", classYear: 2026, image: "/media/Members/2026/Pranay.jpg" },
  { name: "Harsh Kashyap", role: "Alumni", section: "Alumni", classYear: 2026, image: "/media/Members/2026/Harsh.jpg" },
  { name: "Rakesh Kumar", role: "Alumni", section: "Alumni", classYear: 2026, image: "/media/Members/2026/Rakesh2.jpg" },
  { name: "G.Dheeraj", role: "Alumni", section: "Alumni", classYear: 2026, image: "/media/Members/2026/dheeraj.jpg" },
  { name: "S.Bhavana", role: "Alumni", section: "Alumni", classYear: 2026, image: "/media/Members/2026/Bhavana.jpg" },
  { name: "Rupam Kumar", role: "Alumni", section: "Alumni", classYear: 2026, image: "/media/Members/2026/Rupam2.jpg" },
  { name: "D.Divya", role: "Alumni", section: "Alumni", classYear: 2026, image: "/media/Members/2026/Divya.jpg" },
  { name: "B.Chaturya", role: "Alumni", section: "Alumni", classYear: 2026, image: "/media/Members/2026/Chaturya.jpg" },
  { name: "Sujal Kumar", role: "Alumni", section: "Alumni", classYear: 2026, image: "/media/Members/2026/sujal.jpg" },
  { name: "Abhinav Kumar", role: "Alumni", section: "Alumni", classYear: 2026, image: "/media/Members/2026/Abhinav.jpg" },
  { name: "Aniruddha Mondal", role: "Alumni", section: "Alumni", classYear: 2026, image: "/media/Members/2026/Aniruddha2.jpg" },
  { name: "C.Aashirya", role: "Alumni", section: "Alumni", classYear: 2026, image: "/media/Members/2026/Aashirya.jpg" },
  { name: "M.Lena Joshy", role: "Alumni", section: "Alumni", classYear: 2026, image: "/media/Members/2026/Lena.jpg" },
  { name: "Babul Raju", role: "Alumni", section: "Alumni", classYear: 2026, image: "/media/Members/2026/Babul.jpg" },
  { name: "Manish Mohapatra", role: "Alumni", section: "Alumni", classYear: 2026, image: "/media/Members/2026/Manish.jpg" },
  { name: "Manvendra Singh", role: "Alumni", section: "Alumni", classYear: 2026, image: "/media/Members/2026/Manvendra.jpg" },
  { name: "M.Preetham", role: "Alumni", section: "Alumni", classYear: 2026, image: "/media/Members/2026/Preetham.jpg" },
  { name: "Indrajit Das", role: "Alumni", section: "Alumni", classYear: 2026, image: "/media/Members/2026/Indrajit.jpg" },
  

];

