var store = [{
        "title": "My First Post",
        "excerpt":"Welcome to My Blog!   Welcome! This is my very first post on my new blog, and I’m thrilled to share my journey of exploration and information-sharing with fellow students like myself!   Most important question first, so how did I get into Machine Learning?   Well, I’ve always been interested in self-improvement. This interest started at a young age, focusing not only on becoming more effective in my studies but also on optimizing my mental and physical well-being. I regularly listen to inspiring figures like Andrew Huberman, Lex Friedman, and many more. More specifically, my journey into Machine Learning began when I took a course at UNSW called “Digital and Web Analytics.” One of the assessment tasks was to perform a sentiment analysis on a crisis a company had gone through.   Initially confused about what “sentiment analysis” entailed, I started exploring scientific papers, attending random lectures, and kept encountering the term “Machine Learning.” Somehow, I created a sentiment analysis of public opinion on whether comments on YouTube and Twitter were positive, negative, or neutral using Natural Language Processing. I coded, but I faced one big problem—I had no idea how the sentiment analysis packages worked.   Additionally, while navigating this, I was concurrently enrolled in a course on “Linear Models,” delving into topics like linear regression, which significantly sparked my interest. Unfortunately, the lectures never explained anything about what Machine Learning is! Why! Fueled by motivation to learn how exactly a machine categorizes words and wha alternative are there to linear regression, I scoured the internet to learn more, eventually leading me to discover the vast world of Machine Learning! And that’s the current journey I’m on now, and I can’t wait to learn more!  ","categories": ["Miscellaneous"],
        "tags": [],
        "url": "/miscellaneous/first-post/",
        "teaser": null
      },{
        "title": "CS229 Review",
        "excerpt":"Review of Standford CS229 course   Summary     Requires at least level 2 university mathematics. This includes an understanding of Multivariate Calculus and a bit of Linear Algebra.   Lectures provide the backbone understanding but don’t delve into the mathematics. In order to maximize the learning process, ensure completing all problem sets.   Standford students, after completing the course, create their own machine learning application. I suggest completing one as well.   Having a strong understanding of Linear Models is beneficial to understanding most concepts due to the fast pace of the course.   Comprehensive Review   Introduction   After wanting to learn machine learning, I scoured the internet to find the best resources, knowing there was an unimaginable amount of books, videos, tutorials, and articles, it just left me confused and flustered!   To narrow my focus, I wanted to learn from the best, so who really is the best academic in the machine learning space? Well, everyone unanimously agrees that Andrew Ng is probably the best ML teacher, and he offers amazing courses such as on Coursera. But after hearing about the world-famous CS229 as the origin of many students’ introduction to ML, I decided to take the 2018 CS229 course by Stanford.   Who is this course for?   Don’t take this course if you don’t have at least a level 2 university-level mathematics course previously. The main value in this course is it takes a dive into the mathematics behind popular machine learning algorithms. Since the focus is on mathematics, I’ve read many comments under the lecture videos stating, “Is it okay if I don’t understand the mathematics?” Well, not really, since I feel there are better resources less focused on the mathematics and provide an intuitive understanding, such as “Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow” and “The Hundred-Page Machine Learning Book by Andriy Burkov,” which just give an overview of the algorithms focusing on implementation over mathematics.   Is it okay to watch the 2018 version with Andrew Mg over the new iterations of the course?   Many popular machine learning algorithms have been around for decades. Since this course aims to focus on the most popular algorithms in machine learning, these algorithms have been established decades ago. Let me give you an example:      Linear Regression: Sir Francis Galton in 1895   Support Vector Machine: AT&amp;T Bell Laboratories by Vladimir Vapnik with colleagues in 1993   Principal Component Analysis: Karl Pearson in 1901   As you can see these algorithsm have been discovered decades ago. I would recommend doing the 2018 course so you can gain a true understanding of why Andrew Ng is considered one of the best ML teachers.   How to acess the other class material, like problem sets and lectures notes?   Supplement with the lectures are problems seta dn lectures notes. I’v found watching #link(statques) as well as #(github)   What to do next?   After completing the course, you should feel that you have a strong basic understanding of popular machine learning algorithms. It is important that you don’t just watch the lectures but also ensure you understand everything you’ve watched. Ensure you use the Feynman technique to try to explain concepts in your own words and don’t get trapped into the bubble of just watching lectures and thinking you know the concepts because when the interview comes around, how can you explain these concepts to the interviewer?   Personally, I’ll be now taking the “Machine Learning Specialization” as well as creating my own scikit-learn emulation module to improve my ML and programming skills. I recommend you continue a similar path, now trying to do Kaggle problems or start.   Concluding   Watching CS290 has been a beatiful journey and i really appriate standford making this course acceisble to everyone if you want notes #—(notability)  ","categories": ["Review"],
        "tags": [],
        "url": "/review/CS290-review/",
        "teaser": null
      },{
        "title": "Geoffrey Hinton : The godfather Deep learning?",
        "excerpt":"&lt;!— Interview     High School friedn -&gt; mathematics bettwe then him states -&gt; the brain uses holigram -&gt; Whats a holigram? “Lashes experiement with mice where u chop bits of rats brains and where bits of brains are distrib uted over the whole brain”   university -&gt; physiology + physics -&gt; became a carpenter -&gt; when to cmabridge to study AI -&gt; where his professor just finsihed working with NN   PHD in AI -&gt; couldnt get jobs in britian -&gt; when to America (California)   Ron Williams, between us developed the backprop algorithm, it was mainly David Rumelhart’s idea. Paul Werbos had published it already quite a few years earlier, but nobody paid it much attention. And there were other people who’d developed very similar algorithms, it’s not clear what’s meant by backprop. But using the chain rule to get derivatives was not a novel idea. -&gt; Back propigation   which one is the most exited? So I think the most beautiful one is the work I do with Terry Sejnowski on Boltzmann machines. So we discovered there was this really, really simple learning algorithm that applied to great big density connected nets where you could only see a few of the nodes. So it would learn hidden representations and it was a very simple algorithm. And it looked like the kind of thing you should be able to get in a brain because each synapse only needed to know about the behavior of the two neurons it was directly connected to.   Finish wathcing it –!&gt;  ","categories": ["Inspiration"],
        "tags": [],
        "url": "/inspiration/Geoffrey-Hinton/",
        "teaser": null
      },{
        "title": "Is it true that long-term injuries comes from prior minior injuries?",
        "excerpt":"A lense from a statistical point of view. Can we create a ML model to predicit the outcomes?   Introduction   After watching sports for many years, I noticed non-contact injuries, especially in the NBA. I went on to examine it. Randomly, I clicked on a video where a popular YouTuber states, ‘Look at KD; he had an ACL injury, and before that, he had a calf strain.’ Is this really true? The YouTube channel mentioned is MPJPerformance, and the video link is here!   Retriving and Cleaning the data   Firstly getting the data   Luckly for me the raw data is already avaliable, big thanks to JaseZiv for the github repositry click here!   How is the data currently structured?   the file named “nba_injuries” has webcrawled various NBA sources and the origian files follow a JSON schema as follows:      Date: 1947-08-05   Team: Bombers (BAA)   Acquired:   Relinquished: Jack Underman   Notes: fractured legs (in auto accident) (out indefinitely) (date approximate)   Creating a database and cleaning up the data   Before we can clean the data to remove duplicates and unnessary/missing inputs we first need to create a database scehema appropriate to our queries and data retrival goals.      Identify all injured playes easily   Idenify length of injury easily   Identify if this play has prior/future injury   Proximity of next injury/prior injury   Based on these retrival goals we can take a view from a statisatical POV if “long term injuries are srouced from short term injuries”. Where we can explore…   As pointed out by Chip Huyen in Chapter two of “Designing Machine Learning Systems” states the importance of Data Models “How you choose to represent data not only affects the way your systems are built, but also the problems your systems can solve”. Using this chapter as a out Chip outlines “NoSQL” to follow a strict schema, therefore for time saving we will use a “Relational Database”.   Let’s start off by examing it from a statistics point of view?   building the story  ","categories": ["Projects"],
        "tags": [],
        "url": "/projects/nba-risk-injury/",
        "teaser": null
      },{
        "title": "My Machine Learing Mastery Roadmap",
        "excerpt":"After watching many videos and having a solid foundational of a overview of concepts  and tool in machine learing i beleive it finally time for me to make a curriculm!   Hmmm…How do i go about this?   Before asessing my weakness, what are my inspiration say is a good pathway?  Well after watching Lex Fridman interview with Andrew Ng here!  he speicficed the improtance of taking the refined coursework including ML, Deep Learning, Mlops, tensorflow certification courses then focusing once you have taken enough courses then work on projects and reading research papers.   Addtionally, Daniel Bourke, a fellow Australian has created a amazing mindmap (i love mindmaps) for a stack needed to become a ML engineer (here!)[https://whimsical.com/machine-learning-roadmap-2020-CA7f3ykvXpnJ9Az32vYXva]. The main focuses resrouces including fast.ai, CS50’s, Hnads-on Machine Learning by Aurelien Geron.   Focus on the weakness   I beleive (currently?) Machine learning ecosystem can be broken down into the follow skills      Mathematics   ML algorithms   MLops   Python skills   Cloud Services   SQL database   Since i have a currenlty pursuing a Mathhematics and Marketing degree, the main focus should be builing later half. Althought i have expericnes with Cloud Services including AWS and  SQL database i will significnatly have to improve in this area. Addtionally, my Python skills a desent but thtere is a way to go   What i have currently done?   Well currently i have completed/doing:      CS29 by Andrew Ng   Hands-On Machine Learning with Scikit-Learn and Tensorflow   The Hundred-page Machine Learning Book by Andriy Burkov   Deep learning Specialisation by Andrew Ng   The Roadmap With Certifications      Programming            “Python 3 Object-Oriented Programming” by Dusty Phillips       “Fluent Python” Book by Luciano Ramalho       “Algorithms” Princeton University       “Coding Interview University” (github)[https://github.com/jwasham/coding-interview-university]           ML algorithms            Deep Learning for Coders with fastai &amp; PyTorch       Introduction to Machine Learning with Python: A Guide for Data Scientists       Neural Networks : Zero to hero by Andrej Karpathy       Recipe for training neural networks by Andrej Karpathy       Papers with Code : Most popular and Recent machine learning papers           MLops            Desigining Machine Learing Systems by Chip Huyen       Stanford’s CS 329S: Machine Learning Systems Design by Chip Huyen       Coursera’s MLOps Specialization by DeepLearning.AI       Full Stack Deep Learning       fast.ai           Cloud            Microsoft Certified: Azure Fundamentals           SQL            LeetCode SQL       SQL for Data Analysis Advanced Techniques for Transforming Data into Insights       SQL Tutorial for Beginners (and Technical Interview Questions Solved) by freeCodeCamp.org           Structure   Currently since unviersity off i have a little time to concurrently complete 2 courses at the same time, the plan is i want to read for projects i want to have a project in mind work on whilst reading/watching resources. The currentl systtemiatic plan is;      Deep learning Specialisation by Andrew Ng  + Stanford’s CS 329S: Machine Learning Systems Design by Chip Huyen   Neural Networks : Zero to hero by Andrej Karpathy + Recipe for training neural networks by Andrej Karpathy   “Algorithms” Princeton University + “Fluent Python” Book by Luciano Ramalho   Full Stack Deep Learning + fast.ai   Microsoft Certified: Azure Fundamentals + SQL Tutorial for Beginners (and Technical Interview Questions Solved) by freeCodeCamp.org   ","categories": ["Machine Learning"],
        "tags": [],
        "url": "/machine%20learning/machine-learning-curriculum/",
        "teaser": null
      }]
