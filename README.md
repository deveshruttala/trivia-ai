# Trivia Generator Application

This full-stack application creates trivia questions using OpenAI's GPT models. Users input a topic, and the app displays 5-6 trivia questions with answers. The backend includes a POST API endpoint (`/v1/api/trivia`) that processes the topic and retrieves questions from OpenAI. The frontend, built with React.js, features a responsive interface with a text field, submit button, and display area for questions. <br>

* Usage <br>
Enter a topic in the text field. <br>
Click the generate button to fetch trivia questions.<br>
Refresh to start again <br>


## Setup
first clone the repo to ur local machine

* for development 

```bash
npm install
npm run dev
```

* for publishing run

```bash
npm run build 
npm run start 
```
<br>
After running create a local env and add ur api key over there and make any changes that you want in the src/app 
<br>

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<br>

### Resources 

-  [TypeScrpit](https://www.typescriptlang.org/)  - This project also includes typescipt, know and learn more about it 
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
- Tailwind CSS for creating the textbox and question ui 
- Open AI API has been integrated to generate the trivia question on prompt 
- Other online resources that have been a part of this project 


### Demo

trivia-app-demo

[Watch the video](trivia-app-demo.mp4)

<br>

Owned by Devesh 