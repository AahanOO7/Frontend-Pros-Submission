import cor1 from "../media/cor1.jpeg";
import cor2 from "../media/cor2.jpeg";
import cor3 from "../media/cor3.jpeg";
import cor4 from "../media/cor4.jpeg";
import cor5 from "../media/cor5.jpeg";
import des1 from "../media/des1.jpeg";
import des2 from "../media/des2.jpeg";
import des3 from "../media/des3.jpeg";
import des4 from "../media/des4.jpeg";
import des5 from "../media/des5.jpeg";
import dev1 from "../media/dev1.jpeg";
import dev2 from "../media/dev2.jpeg";
import dev3 from "../media/dev2.jpeg";
import dev4 from "../media/dev4.jpeg";
import dev5 from "../media/dev5.jpeg";
import marr1 from "../media/marr1.jpeg";
import marr2 from "../media/marr2.jpeg";
import marr3 from "../media/marr3.jpeg";
import marr4 from "../media/marr4.jpeg";
import marr5 from "../media/marr5.jpeg";
import mus1 from "../media/mus1.jpeg";
import mus2 from "../media/mus2.jpeg";
import mus3 from "../media/mus3.jpeg";
import mus4 from "../media/mus4.jpeg";
import mus5 from "../media/mus5.jpeg";

const courses = [
	{
		Name: "Flutter & Dart - The Complete Guide [2021 Edition]",
		Price: 360,
		Rating: 4.6,
		Enrollment: "112,764",
		Description:
			"Join the most comprehensive & bestselling Flutter course and learn how to build amazing iOS and Android apps!\n\nYou don't need to learn Android/ Java and iOS/ Swift to build real native mobile apps!\n\nFlutter - a framework developed by Google - allows you to learn one language (Dart) and build beautiful native mobile apps in no time. Flutter is a SDK providing the tooling to compile Dart code into native code and it also gives you a rich set of pre-built and pre-styled UI elements (so called widgets) which you can use to compose your user interfaces.",
		Image: dev1,
		Discount: "96%(Original:8640)",
		"Course provider": "Maximilian Schwarzmüller",
		Category: "Developement",
	},
	{
		Name: "React - The Complete Guide (incl Hooks, React Router, Redux)",
		Price: 360,
		Rating: 4.6,
		Enrollment: "335,179",
		Description:
			"Learn React or dive deeper into it. Learn the theory, solve assignments, practice in demo projects and build one big application which is improved throughout the course: The Burger Builder!",
		Image: dev2,
		Discount: "96%(Original:8640)",
		"Course provider": "Maximilian Schwarzmüller",
		Category: "Developement",
	},
	{
		Name: "The Beginner's Guide to Artificial Intelligence in Unity.",
		Price: 360,
		Rating: 4.7,
		Enrollment: "20,141",
		Description:
			"Do your non-player characters lack drive and ambition? Are they slow, stupid and constantly banging their heads against the wall? Then this course is for you. Join Penny as she explains, demonstrates and assists you in creating your very own NPCs in Unity with C#. All you need is a sound knowledge of Unity, C# and the ability to add two numbers together.",
		Image: dev3,
		Discount: "72%(Original:1000)",
		"Course provider": "Penny de Byl",
		Category: "Developement",
	},
	{
		Name: "Unreal Engine 4: The Complete Beginner's Course",
		Price: 360,
		Rating: 4.4,
		Enrollment: "29,517",
		Description:
			"Learn game development with Unreal Engine 4. UE4 is the industry-leading 3D game design software that the professionals use to create today’s top games. Start your journey towards getting paid to make video games today!",
		Image: dev4,
		Discount: "96%(Original:8640)",
		"Course provider": "David Nixon",
		Category: "Developement",
	},
	{
		Name: "The Complete Android N Developer Course",
		Price: 360,
		Rating: 4.4,
		Enrollment: "148,098",
		Description:
			"Learn Android App Development with Android 7 Nougat by building real apps including Uber, Whatsapp and Instagram! Become a professional app developer, take freelance gigs and work from anywhere in the world.Submit your apps to Google Play and generate revenue with Google Pay and Google Ads.A huge range of technologies are covered, including open source Parse Server, Firebase, Admob, GDX (game development), Bluetooth and a whole lot more.",
		Image: dev5,
		Discount: "96%(Original:8640)",
		"Course provider": "Rob Percival",
		Category: "Developement",
	},
	{
		Name: "The Ultimate Drawing Course - Beginner to Advanced",
		Price: 360,
		Rating: 4.5,
		Enrollment: "419,147",
		Description:
			"Join over 260,000 learning student and start gaining the drawing skills you've always wanted.The Ultimate Drawing Course will show you how to create advanced art that will stand up as professional work. This course will enhance or give you skills in the world of drawing - or your money back This course will take you from having little knowledge in drawing to creating advanced art and having a deep understanding of drawing fundamentals.”",
		Image: des1,
		Discount: "96%(Original:8640)",
		"Course provider": "Quinton Batchelor,Jaysen Batchelor",
		Category: "Design",
	},
	{
		Name: "Ultimate Adobe Photoshop Training: From Beginner to Pro”",
		Price: 360,
		Rating: 4.6,
		Enrollment: "129,890",
		Description:
			"This is the ultimate Photoshop training course that will take you from absolute beginner to proficien Learn how to use the program with ease while having fun! My approach is simple: we focus on real world cases and I present the best techniques that require minimal effort yet produce maximum results. All my content is focused on getting the job done in the least amount of time possible. I'll be using the latest version of the program - Photoshop CC 2021, but all the content is explained for all users, no matter what version you have installed.”",
		Image: des2,
		Discount: "96%(Original:8640)",
		"Course provider": "Cristian Doru Barin",
		Category: "Design",
	},
	{
		Name: "Sketch from A to Z (2020): Become an app designer",
		Price: 360,
		Rating: 4.7,
		Enrollment: 29146,
		Description:
			"Learn to Design Beautiful, High-Quality Mobile Application UI with Sketch's Powerful Tools and Smooth Workflow Master the essential principles and tools of Sketch. Discover design techniques that will enhance your creative potential. Learn and implementUI best practices to ensure quality and usability. Journey from concept to completion by creating a sample mobile application.”",
		Image: des3,
		Discount: "96%(Original:8640)",
		"Course provider": "Joseph Angelo Todaro",
		Category: "Design",
	},
	{
		Name: "Graphic Design Bootcamp: Photoshop, Illustrator, InDesign",
		Price: 360,
		Rating: 4.5,
		Enrollment: "89,906",
		Description:
			"This course is for anyone who is interested in becoming a graphic designer, and especially geared towards beginners. When you enroll in this course, you will have access to over 15 hours of on-demand content, as well as the opportunity to join a private Facebook group with over 13,000 members.",
		Image: des4,
		Discount: "96%(Original:8640)",
		"Course provider": "Derrick Mitchell",
		Category: "Design",
	},
	{
		Name: "Illustrator 2020 MasterClass",
		Price: 360,
		Rating: 4.6,
		Enrollment: "123,863",
		Description:
			"This course has been purposely designed for users of all experiences, from complete beginners to existing Illustrator users, who want to take their skills to the next level. Being able to confidently work in Illustrator is an essential skill for any Graphic Designer or Illustrator, but it is an equally useful tool for Product Designers, Fashion Designers, UI/UX designers and various other areas within and outside of the creative industry.",
		Image: des5,
		Discount: "96%(Original:8640)",
		"Course provider": "Martin Perhiniak",
		Category: "Design",
	},
	{
		Name: "The Complete Digital Marketing Course - 12 Courses in 1",
		Price: 360,
		Rating: 4.5,
		Enrollment: "525,799",
		Description:
			"Master Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook Marketing, Analytics & More! Join 400,000+ students in the bestselling digital marketing course on Udemy!\n    With over 20 hours of training, quizzes and practical steps you can follow - this is one of the most comprehensive digital marketing courses available. We'll cover SEO, YouTube Marketing, Facebook Marketing, Google Adwords, Google Analytics and more!\n    Learn By Doing\n    The course is hugely interactive with projects, checklists & actionable lectures built into every section.Learn step by step how to market a business online from scratch across all the major marketing. Follow the steps on screen to get results at work, for own business or for your digital marketing clients.\n    12 Courses in 1\n    Covering 12 major online marketing topics and comprising of 20+ hours of clear cut lectures & practice activities - this course is \"incredible value for money!\" as one student said. We'll Market Research. Ask 3 simple questions to validate your business  WordPress. Build a world-class website in 1 hour without any  Email Marketing. Build a mailing list of 1000 people in 30 days from scratch.",
		Image: marr1,
		Discount: "96%(Original:8640)",
		"Course provider": "Rob Percival, Daragh Walsh",
		Category: "Marketing",
	},
	{
		Name: "Ultimate Google Ads Training 2020: Profit with Pay Per Click",
		Price: 360,
		Rating: 4.5,
		Enrollment: "166,852",
		Description:
			"Google Ads 2020: How our clients have transformed their sales using Google Ads & get your Google Ads certification! \n    Win back your business from your competition by really learning Google AdWords like an expert. This Google AdWords Course has the *HIGHEST STUDENT SATISFACTION RATING in Udemy's entire marketing and advertising section! *(Reported by Udemy)\n    Welcome to Udemy's highest rated AdWords course of all time.\n    Over 99,000 business owners, students, marketing specialists and entrepreneurs have enrolled writing in thousands of 5 star reviews\n    Learn How To Drive Consistent, Reliable, High-Quality Traffic To Your Site Every Single Day With Google AdWords!\n    Your customers are using Google every single day to search for the products and services you offer, but you're losing business to your competition because their AdWords campaigns are more optimized than yours are.",
		Image: marr2,
		Discount: "96%(Original:8640)",
		"Course provider": "Isaac Rudansky",
		Category: "Marketing",
	},
	{
		Name: "Facebook Ads & Facebook Marketing MASTERY 2021 | Coursenvy",
		Price: 360,
		Rating: 4.5,
		Enrollment: "165,682",
		Description:
			"Facebook Marketing from beginner to advanced! Join 100,000+ students who MASTERED Facebook and are Facebook Ads experts! \n    Want to become a Facebook Ads expert? JOIN THE 500+ COMPANIES I HAVE CONSULTED ON SOCIAL MEDIA MARKETING AND INCREASED CONVERSIONS FOR VIA FACEBOOK AND INSTAGRAM ADS! Facebook Marketing is a REQUIRED skill for anyone with a business, product, service, brand, or public figure they need to PROMOTE! Join our 300,000+ modMBA students who have MASTERED Facebook advertising with this COMPLETE Facebook Marketing Mastery Course! \n        Three reasons to TAKE THIS COURSE right now! \n    You get lifetime access to lectures!\n    You can ask me questions and see me respond to every single one of them thoughtfully!",
		Image: marr3,
		Discount: "96%(Original:8640)",
		"Course provider": "Course Envy",
		Category: "Marketing",
	},
	{
		Name: "Instagram Marketing 2021: Complete Guide To Instagram Growth",
		Price: 360,
		Rating: 4.5,
		Enrollment: "136,359",
		Description:
			"nstagram is a small time investment for a huge customer return!\n    Once you spend just a few hours learning the powerful proven Instagram marketing techniques, you will see why we are the recommend course. We have easy to follow step by step techniques to grow your followers and market your business.\n    Your time will pay off by reaching thousands of new customers, and building a strong, trustworthy relationship through Instagram will skyrocket your brand awareness to a level beyond your expectations. You will have the tools to create quality content, grow your Instagram followers and market your business to these hyper-targeted customers.\n    When making a purchasing decision, people online use your social media presence as a measure of the quality, and trustworthiness of your business. Nothing speaks trust and quality louder than having a thousands of targeted, real, and loving Instagram followers on your profile (of which you can contact at any time!) Your profile will be professional and compelling and you will be using stories, live streaming and all the other new features Instagram releases.",
		Image: marr4,
		Discount: "96%(Original:8640)",
		"Course provider": "Benjamin Wilson, Entrepreneur Academy",
		Category: "Marketing",
	},
	{
		Name: "Social Media Marketing MASTERY | Learn Ads on 10+ Platforms",
		Price: 360,
		Rating: 4.5,
		Enrollment: "86,576",
		Description:
			"MASTER online marketing on Twitter, Pinterest, Instagram, YouTube, Facebook, Google and more ad platforms! Coursenvy ® \n    If you want to be successful with Social Media Marketing you will LOVE this Udemy course! You will learn the principles and strategies that work for us and that we have used to build highly converting ads for over 500+ businesses and clients successfully! Facebook, Twitter, Instagram, Pinterest, Google, YouTube, LinkedIn, Tumblr, Wordpress, Blogger... any marketing via social media, we have you covered with this top-rated course! Stop wasting your money blindly running ads. MASTER paid online marketing once and for all! The optimization of your social media accounts is a REQUIRED skill for ALL marketers and business owners. TAKE ACTION and learn social media marketing on 10+ platforms starting today!\n    JOIN THE 100,000+ HAPPY STUDENTS I HAVE TAUGHT SOCIAL MEDIA MARKETING!\n    Do you want to partake in a CONSTANTLY updated Social Media Marketing course that teaches you paid advertising and online marketing skills required for over TEN Social Media Platforms? Learn social media ads from A to Z all in one place!\n        Three reasons to TAKE THIS COURSE right now! \n    You get lifetime access to lectures.",
		Image: marr5,
		Discount: "96%(Original:8640)",
		"Course provider": "Course Envy",
		Category: "Marketing",
	},
	{
		Name: "An Entire MBA in 1 Course:Award Winning Business School Prof",
		Price: 360,
		Rating: 4.5,
		Enrollment: "387,825",
		Description:
			'This course is taught by an award winning MBA professor with significant real world experience working at Goldman Sachs as well as in the venture capital, hedge fund and consulting industries (he has founded several companies and sits on several boards). Many business concepts are simply common sense. This course will focus on business concepts that you need to know that might not be common sense. This course makes the general business, accounting and finance process very easy to understand! The professor of this course is also the author of "101 Crucial Lessons They Don\'t Teach You in Business School," which Forbes magazine recently called "1 of 6 books that all entrepreneurs need to read right now.',
		Image: cor1,
		Discount: "96%(Original:8640)",
		"Course provider": "Chris Haroun",
		Category: "Business",
	},
	{
		Name: "The Business Intelligence Analyst Course 2020",
		Price: 360,
		Rating: 4.5,
		Enrollment: "27,247",
		Description:
			"We are proud to present you this one-of-a-kind opportunity. There are several online courses teaching some of the skills related to the BI Analyst profession. The truth of the matter is that none of them completely prepare you.\n\nOur program is different than the rest of the materials available online.  \nThese are the precise technical skills recruiters are looking for when hiring BI Analysts. And today, you have the chance of acquiring an invaluable advantage to get ahead of other candidates. This course will be the secret to your success. And your success is our success, so let’s make it happen!",
		Image: cor2,
		Discount: "96%(Original:8640)",
		"Course provider": "365 Careers",
		Category: "Business",
	},
	{
		Name: "Become a Product Manager | Learn the Skills & Get the Job",
		Price: 360,
		Rating: 4.5,
		Enrollment: "122,615",
		Description:
			"The most updated and complete Product Management course on Udemy! You'll learn the skills that make up the entire Product Management job and process: from ideation to market research, to UX wireframing to prototyping, technology, metrics, and finally to building the product with user stories, project management, scoping, and leadership. We even have interviews with real life PMs, Q&A sessions with students, and a comprehensive guide to preparing and interviewing for a Product Management job. \n\nRight now, there are over 3,000+ job listings worldwide that are looking for Product Managers, that pay on average $100,000 / year.\n\nThe demand for Product Management is increasing at an insane rate. More and more companies are finally figuring out how important this discipline and this role is to their success. \n\nBut how exactly do you get into the field? There aren't any degrees in Product Management & there are no certifications. Most Product Managers get into the field through luck or connections. That ends here - we'll get you up to date on ALL the skills you need to learn Product Management AND have the best chance at getting the job you want. There's no more ambiguity to it. We'll show you what you need to know and what you have to do - all taught from a Product Management insider.",
		Image: cor3,
		Discount: "96%(Original 8640)",
		"Course provider": "Cole MErcer,Evan Kimbrell",
		Category: "Business",
	},
	{
		Name: "Tableau 2020 A-Z: Hands-On Tableau Training for Data Science",
		Price: 360,
		Rating: 4.6,
		Enrollment: "224,413",
		Description:
			"Learn data visualization through Tableau 2020 and create opportunities for you or key decision-makers to discover data patterns such as customer purchase behavior, sales trends, or production bottlenecks.\n\nYou'll learn all of the features in Tableau that allow you to explore, experiment with, fix, prepare, and present data easily, quickly, and beautifully.\n\nUse Tableau to Analyze and Visualize Data So You Can Respond Accordingly\n\n    Connect Tableau to a Variety of Datasets\n\n    Analyze, Blend, Join, and Calculate Data\n\n    Visualize Data in the Form of Various Charts, Plots, and Maps\n\nConvert Raw Data Into Compelling Data Visualizations Using Tableau 2020\n\nBecause every module of this course is independent, you can start in whatever section you wish, and you can do as much or as little as you like.\n\nEach section provides a new data set and exercises that will challenge you so you can learn by immediately applying what you're learning.\n\nContent is updated as new versions of Tableau are released. You can always return to the course to further hone your skills, while you stay ahead of the competition.",
		Image: cor4,
		Discount: "96%(Original:8640)",
		"Course provider": "Kirill Eremenko, SuperDataScience Team",
		Category: "Business",
	},
	{
		Name: "PMP Exam Prep Seminar - Pass the PMP on Your First Attempt",
		Price: 360,
		Rating: 4.7,
		Enrollment: "59,313",
		Description:
			"You need to pass the PMP exam and you need quality training that'll help you in your role as a project manager. You also want to learn from an authority in project management, in an online environment with plenty of assignments, videos, and concise explanations. This course provides 35 PDUs and is taught by project management author and expert Joseph Phillips. Joseph is the author of several project management books from McGraw-Hill, the American Management Association, and Dummies Press. He is certified as a PMP, PMI-ACP, ITIL, Project+, and is a Certified Technical Trainer.\n\nThe 35 hours of project management education are earned by completing all of the course, the assignments, exercises, and quizzes. The Learning Management System tracks your completion of the course; if you complete all the videos, assignments, and interactive sessions, you can claim these hours for your PMP exam application or to maintain your PMP certification.",
		Image: cor5,
		Discount: "96%(Original:8640)",
		"Course provider": "Joseph Philips",
		Category: "Business",
	},
	{
		Name: "Intermediate Blues Rhythm Guitar",
		Price: 360,
		Rating: 4.6,
		Enrollment: "1,442",
		Description:
			"l Welcome to Intermediate Blues Rhythm Guitar! That's right, no fancy titles or gimmicks here...just straight up blues rhythm! I developed this course to be a direct companion to my release Beginning Blues Rhythm Guitar. This course will be a natural progression from the basics you may already know and, will fully prepare you to play just about any blues song.",
		Image: mus1,
		Discount: "96%(Original:8640)",
		"Course provider": "Corey Congilio, Erich Andreas",
		Category: "Music",
	},
	{
		Name: "Pianoforall - Incredible New Way To Learn Piano & Keyboard",
		Price: 360,
		Rating: 4.6,
		Enrollment: "291,759",
		Description:
			"l Pianoforall is specially designed to take complete beginners to an intermediate level faster than any other method. You start with popular rhythm style piano (think of artists like Lennon & McCartney, Elton John, Billy Joel, Barry Mannilow, Lionel Ritchie, Coldplay, Norah Jones and so on) which means you get to sound like a pro right from the start.",
		Image: mus2,
		Discount: "96%(Original:8640)",
		"Course provider": "Robin Hall",
		Category: "Music",
	},
	{
		Name: "The Complete Piano Chords Course | Beginner to Advanced",
		Price: 360,
		Rating: 5,
		Enrollment: 130,
		Description:
			"l Imagine being able to sit down at a piano or keyboard and PLAY any song without the need to read sheet music? Now you can easily achieve this within weeks not years and without wasting too much money, time, and effort on traditional Piano Lessons.The course is carefully structured to take absolute beginners with no previous training in Piano or Keyboard to the advanced level within a relatively short period of time.",
		Image: mus3,
		Discount: "96%(Original:8640)",
		"Course provider": "Kingsley B-Nkrumah",
		Category: "Music",
	},
	{
		Name: "Music Theory for Electronic Producers - The Complete Course!",
		Price: 360,
		Rating: 4.4,
		Enrollment: "12,422",
		Description:
			"l In this course, you will gain a deep understanding of Music Theory and ideas techniques and formulas to use when creating your own electronic music to allow you more options. You'll learn the beauty and the power of music theory that's used by professionals today. With over 8-hours of video, this music course is JAM PACKED with information to help you learn music theory to help you improve at music theory today!",
		Image: mus4,
		Discount: "96%(Original:8640)",
		"Course provider": "Tomas George, Digital Music Masters",
		Category: "Music",
	},
	{
		Name: "SINGING SIMPLIFIED #1: The Fast-Track to Singing Like a Pro",
		Price: 360,
		Rating: 4.6,
		Enrollment: "21,273",
		Description:
			"l SINGING SIMPLIFIED will get you on your way to becoming an excellent singer... faster than you thought possible! Believe it or not, you already have the \"built-in\" ability to be a great singer. You were born with a natural vocal range and I'm going to help you to tap into it - quickly and easily, while having FUN of course! We'll combine technique and everyday emotive sounds in your vocal training to help you understand that singing isn't as difficult or scary as you thought it was.",
		Image: mus5,
		Discount: "96%(Original:8640)",
		"Course provider": "Steve Glazer",
		Category: "Music",
	},
];

export default courses;
