import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios'
import './App.css'

function App() {
  const [code, setCode] = useState(` function sum() {
  return 1 + 1
}`)

const [review, setReview] = useState(`
  ## 🚀 Welcome to the Code Review System  
  &nbsp;
  
  Hello, I'm **Anvesh Shetty**. This project is built to help developers analyze and improve their code quality effortlessly. It supports multiple programming languages, provides syntax highlighting, and delivers AI-generated feedback to enhance your code.  
  
  Click the **"Review"** button to get started and receive instant insights!  
  `);
  

  
  const [isLoading, setIsLoading] = useState(false) 
  useEffect(() => {
    prism.highlightAll()
  }, [])

  async function reviewCode() {
    setIsLoading(true); 
    setReview('Reviewing..'); 
    try {
      const response = await axios.post('http://localhost:3000/ai/get-review', { code })
      setReview(response.data) 
    } catch (error) {
      setReview('Failed to fetch review. Please try again later.') 
    } finally {
      setIsLoading(false); 
    }
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
                color: "#ccc",
              }}
            />
          </div>
          <div
            onClick={reviewCode}
            className="review">
            {isLoading ? (
              <span>Reviewing..</span>
            ) : (
              'Review'
            )}
          </div>
        </div>
        <div className="right">
          <Markdown rehypePlugins={[rehypeHighlight]}>
            {review}
          </Markdown>
        </div>
      </main>
    </>
  )
}

export default App
