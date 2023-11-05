import { useState } from "react";
import img1 from "../assets/img/blog/blog-post-1.png";
import img2 from "../assets/img/blog/blog-post-2.jpg";
// import img3 from "../assets/img/blog/blog-post-2.jpg";
// import img4 from "../assets/img/blog/blog-post-2.jpg";
// import img5 from "../assets/img/blog/blog-post-2.jpg";
// import img6 from "../assets/img/blog/blog-post-2.jpg";

const AllBlogData = () => {
  const blogsData = [
    {
      id: 1,
      img: img1,
      title: "Using Firebase Firestore in Building a Personal Assistant App",
      commentor: "Almustapha Wakili ",
      date: "21 April 2023",
      tag: `Android, Firebase, Cloud, data, storage`,
      description1:
        "In today's fast-paced world, personal assistant apps have become an integral part of our daily lives. These apps help us manage our schedules, set reminders, access information, and perform various tasks with just a few taps on our devices. Building a personal assistant app from scratch might sound like a complex endeavor, but with the right tools and technologies, it can be an exciting and rewarding project.  One such tool that can simplify the development process is Firebase Firestore. Firestore is a NoSQL cloud database provided by Google as a part of the Firebase platform. It offers real-time database functionality and seamless integration with mobile and web applications, making it an excellent choice for building a personal assistant app. In this blog post, we'll explore how you can leverage Firebase Firestore to create a powerful personal assistant app.",
        description2:
        "Why Choose Firebase Firestore: Before diving into the technical details, let's briefly discuss why Firebase Firestore is an ideal choice for your personal assistant app: 1. Real-time Database: Firestore provides real-time data synchronization, enabling instant updates across multiple devices. This is essential for a personal assistant app where tasks and reminders need to be shared in real-time. 2. Scalability: Firestore is designed to scale seamlessly as your app grows. Whether you have a handful of users or millions, Firestore can handle the load. 3. Offline Support: Firestore offers offline support, allowing users to access their data and perform tasks even when they're not connected to the internet. This is a valuable feature for a personal assistant app, as it ensures uninterrupted functionality. 4. Cross-Platform: Firebase Firestore can be integrated into both mobile (Android and iOS) and web applications, making it a versatile choice for your app.",
        description3:
       "Building Blocks of a Personal Assistant App: Now, let's break down the key components of a personal assistant app and see how Firebase Firestore can be applied to each: 1. User Authentication: Firebase Authentication can be used to handle user sign-up, login, and secure access to the app. You can link Firestore documents to specific users for personalized experiences. 2. Task and Reminder Management: Firestore can store and manage tasks, reminders, and to-do lists. You can create collections for tasks and documents for individual tasks, making it easy to organize and update tasks in real-time. 3. Natural Language Processing (NLP): Integrating NLP libraries or APIs with your personal assistant app can help in processing and understanding user commands. Firestore can store and retrieve relevant information for the user based on their requests. 4. Chatbot Feature: You can implement a chatbot within your app for natural and interactive conversations. Firestore can be used to store chat history, preferences, and conversation context. 5. Voice Assistant: If your personal assistant app includes voice commands, Firestore can store voice data and user preferences for voice recognition.",
        description4:
        "Getting Started with Firebase Firestore To start using Firebase Firestore in your personal assistant app, follow these steps: 1. Create a Firebase Project: Visit the Firebase Console and create a new project for your app. 2. Set Up Firestore: In the Firebase Console, navigate to Firestore and set up your database. You can choose between production and test modes. 3. Initialize Firestore in Your App: In your app's code, initialize Firestore using Firebase SDK. This will allow you to interact with the database from your app. 4. Define Data Structure: Plan your data structure by creating collections and documents that align with the app's features. 5. Build Features: Implement user authentication, task management, chatbot, voice recognition, and other features based on your app's requirements. Use Firestore to store and retrieve relevant data. 6. Test and Deploy: Test your app thoroughly, and once it's ready, deploy it to app stores or web hosting platforms."
      },
    {
      id: 2,
      img: img2,
      title: "Top 10 Toolkits for Deep Learning in 2022",
      commentor: "Wakili ",
      date: "14 January 2023",
      tag: `wordpress, business, economy, design`,
      description1:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      description2:
        "If you’ve been waiting for an invitation, this calligraphy is it. Commissioned by Notebook hand-lettered design for a poster. Quote is Notebook Building 8 VP’s Regina Dugan—and mine. ",
      description3:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      description4:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    }
  ];

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  return {
    singleData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
  };
};

export default AllBlogData;
