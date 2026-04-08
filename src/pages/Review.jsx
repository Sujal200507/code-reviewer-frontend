import { useState } from "react";
import Left from "../components/Left";
import Right from "../components/Right";

function Review() {
  const [code, setCode] = useState(
`function sum(a, b) {
  // This is a simple function
  return a + b;
}`
  );
  const [review, setReview] = useState("");
  const [reviewSource, setReviewSource] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex h-screen bg-slate-950 text-white gap-4 p-4 pt-0">
      <Left 
        code={code} 
        setCode={setCode} 
        setReview={setReview}
        setReviewSource={setReviewSource}
        setIsLoading={setIsLoading}
        isLoading={isLoading} 
      />
      <Right review={review} isLoading={isLoading} source={reviewSource} />
    </div>
  );
}

export default Review;
