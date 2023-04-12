import "./TechnicalQuestion.css"
import ProgressBar from "./ProgressBar"
import Blind75Dropdown from "./Blind75Dropdown"

function TechnicalQuestion(){
    const blind75 = [
    {
        dataStructure : "Array and Hashing",
        questions : ["Contains Duplicate", "Valid Anagram", "Two Sum", "Group Anagrams", "Top K Frequent Elements"]
    },
    {
        dataStructure : "Two Pointers",
        questions : ["Valid Palindrome", "3 Sum", "Container With Most Water"]
    },
    {
        dataStructure : "Sliding Windows",
        questions : ["Best Time to Buy And Sell Stock", "Longest Substring Without Repeating Characters","Longest Repeating Character Replacement"]
    },
    {
        dataStructure : "Stack",
        questions : ["Valid Parentheses"]
    },
    {
        dataStructure : "Binary Search",
        questions : ["Find Minimum In Rotated Sorted Array", "Search In Rotated Sorted Array"]
    },
    {
        dataStructure : "Linked List",
        questions : ["Reverse Linked List", "Merge Two Sorted Lists", "Reorder List", "Remove Nth Node From End of List"]
    },
    {
        dataStructure : "Trees",
        questions : ["Invert Binary Tree", "Maximum Depth of Binary Tree", "Same Tree", "Subtree of Another Tree"]
    },
    {
        dataStructure : "Tries",
        questions : ["Implement Trie Prefix Tree", "Design Add And Search Words Data Structure", "Word Search II"]
    },
    {
        dataStructure : "Heap/Priority Queue",
        questions : ["Find Median From Data Stream"]
    },
    {
        dataStructure : "Backtracking",
        questions : ["Combination Sum", "Word Search"]
    },
    {
        dataStructure : "Graphs",
        questions : ["Number of Islands", "Clone Graph", "Pacific Atlantic Water Flow"]
    },
    {
        dataStructure : "Advanced Graphs",
        questions : ["Alien Dictionary"]
    },
    {
        dataStructure : "1-D Dynamic Programming",
        questions : ["Climbing Stairs", "House Robber"," House Robber II"]
    },
    {
        dataStructure : "2-D Dynamic Programming",
        questions : ["Unique Paths", "Longest Common Subsequence"] 
    },
    {
        dataStructure : "Greedy",
        questions : ["Maximum Subarray", "Jump Game"]
    },
    {
        dataStructure : "Intervals",
        questions : ["Insert Interval", "Merge Intervals", "Non Overlapping Intervals"]
    },
    {
        dataStructure : "Math & Geometry",
        questions : ["Rotate Image","Spiral Matrix"]
    },
    {
        dataStructure : "Bit Manipulation",
        questions : ["Number of 1 Bits", "Counting Bits", "Reverse Bits"]
    }]
    return(
        <div className="technical-question">
            <div className="technical-heading">
                <h4 className="technical-title">Blind 75</h4>
                <p>Blind 75 is a list of 75 most frequently asked leetcode questions!</p>
            </div>
            <ul className="question-list">
                {blind75.map((object)=>{
                    const randomNumber= Math.floor(Math.random() * 100)
                    return(
                        <div className="element">
                            <Blind75Dropdown unit={object}/>
                            <ProgressBar percentage={randomNumber}/>
                        </div>
                    )})}
                    <li style={{visibility: "hidden"}} className="element" >.</li>
            </ul>
        </div>
    )
}
export default TechnicalQuestion