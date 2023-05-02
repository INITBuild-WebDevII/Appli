import "./TechnicalQuestion.css"
import ProgressBar from "./ProgressBar"
import Blind75Dropdown from "./Blind75Dropdown"

function TechnicalQuestion(){


    const blind75 = [
    {
        dataStructure : "Array and Hashing",
        questions : [
            {
                name : "Contains Duplicate",
                link : "https://leetcode.com/problems/contains-duplicate/"
             },
             {
                name : "Valid Anagram",
                link : "https://leetcode.com/problems/valid-anagram/"
             },
             {
                name : "Two Sum",
                link : "https://leetcode.com/problems/two-sum/"
             },
             {
                name : "Group Anagrams",
                link : "https://leetcode.com/problems/group-anagrams/"
             },
             {
                name : "Top K Frequent Elements",
                link : "https://leetcode.com/problems/top-k-frequent-elements/"
             }
        ]
    },
    {
        dataStructure : "Two Pointers",
        questions : [
            {
                name : "Contains Duplicate",
                link : "https://leetcode.com/problems/valid-palindrome/"
             },
             {
                name : "3 Sum",
                link : "https://leetcode.com/problems/3sum/"
             },
             {
                name : "Container With Most Water",
                link : "https://leetcode.com/problems/container-with-most-water/"
             }
        ]
    },
    {
        dataStructure : "Sliding Windows",
        questions : [
            {
                name : "Best Time to Buy And Sell Stock",
                link : "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
            },
            {
                name : "Longest Substring Without Repeating Characters",
                link : "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
            },
            {
                name : "Longest Repeating Character Replacement",
                link : "https://leetcode.com/problems/longest-repeating-character-replacement/"
            }
        ]
    },
    {
        dataStructure : "Stack",
        questions : [
            {
                name : "Valid Parentheses",
                link : "https://leetcode.com/problems/valid-parentheses/"
            }
        ]
    },
    {
        dataStructure : "Binary Search",
        questions : [
            {
                name : "Find Minimum In Rotated Sorted Array",
                link : "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"
            },
            {
                name : "Search In Rotated Sorted Array",
                link : "https://leetcode.com/problems/search-in-rotated-sorted-array/"
            }
        ]
    },
    {
        dataStructure : "Linked List",
        questions : [
            {
                name : "Reverse Linked List",
                link : "https://leetcode.com/problems/reverse-linked-list/"
            },
            {
                name : "Merge Two Sorted Lists",
                link : "https://leetcode.com/problems/merge-two-sorted-lists/"
            },
            {
                name : "Reorder List",
                link : "https://leetcode.com/problems/reorder-list/"
            },
            {
                name : "Remove Nth Node From End of List",
                link : "https://leetcode.com/problems/remove-nth-node-from-end-of-list/"
             }]
    },
    {
        dataStructure : "Trees",
        questions : [
            {
                name : "Invert Binary Tree",
                link : "https://leetcode.com/problems/invert-binary-tree/"
             },
             {
                name : "Maximum Depth of Binary Tree",
                link : "https://leetcode.com/problems/maximum-depth-of-binary-tree/"
             },
             {
                name : "Same Tree",
                link : "https://leetcode.com/problems/same-tree/"
             },
             {
                name : "Subtree of Another Tree",
                link : "https://leetcode.com/problems/subtree-of-another-tree/"
             } ]
    },
    {
        dataStructure : "Tries",
        questions : [
            {
                name : "Implement Trie Prefix Tree",
                link : "https://leetcode.com/problems/implement-trie-prefix-tree/"
             },
             {
                name : "Design Add And Search Words Data Structure",
                link : "https://leetcode.com/problems/design-add-and-search-words-data-structure/"
             },
             {
                name : "Word Search II",
                link : "https://leetcode.com/problems/word-search-ii/"
             }]
    },
    {
        dataStructure : "Heap/Priority Queue",
        questions : [
            {
                name : "Find Median From Data Stream",
                link : "https://leetcode.com/problems/find-median-from-data-stream/"
             }]
    },
    {
        dataStructure : "Backtracking",
        questions : [
            {
                name : "Combination Sum",
                link : "https://leetcode.com/problems/combination-sum/"
             },
             {
                name : "Word Search",
                link : "https://leetcode.com/problems/word-search/"
             }]
    },
    {
        dataStructure : "Graphs",
        questions : [
            {
                name : "Number of Islands",
                link : "https://leetcode.com/problems/number-of-islands/"
            },
            {
                name : "Clone Graph",
                link : "https://leetcode.com/problems/clone-graph/"
            },
            {
                name : "Pacific Atlantic Water Flow",
                link : "https://leetcode.com/problems/pacific-atlantic-water-flow/"
            }]
    },
    {
        dataStructure : "Advanced Graphs",
        questions : [
            {
                name : "Alien Dictionary",
                link : "https://leetcode.com/problems/alien-dictionary/"
            }]
    },
    {
        dataStructure : "1-D Dynamic Programming",
        questions : [
            {
                name : "Climbing Stairs",
                link : "https://leetcode.com/problems/climbing-stairs/"
            },
            {
                name : "House Robber",
                link : "https://leetcode.com/problems/house-robber/"
            },
            {
                name : "House Robber II",
                link : "https://leetcode.com/problems/house-robber-ii/"
            }]
    },
    {
        dataStructure : "2-D Dynamic Programming",
        questions : [
            {
                name : "Unique Paths",
                link : "https://leetcode.com/problems/unique-paths/"
            },
            {
                name : "Longest Common Subsequence",
                link : "https://leetcode.com/problems/longest-common-subsequence/"
            } ] 
    },
    {
        dataStructure : "Greedy",
        questions : [
            {
                name : "Maximum Subarray",
                link : "https://leetcode.com/problems/maximum-subarray/"
            },
            {
                name : "Jump Game",
                link : "https://leetcode.com/problems/jump-game/"
            }]
    },
    {
        dataStructure : "Intervals",
        questions : [
            {
                name : "Insert Interval",
                link : "https://leetcode.com/problems/insert-interval/"
            },
            {
                name : "Merge Intervals",
                link : "https://leetcode.com/problems/meeting-rooms/"
            }]
    },
    {
        dataStructure : "Math & Geometry",
        questions : [
            {
                name : "Rotate Image",
                link : "https://leetcode.com/problems/rotate-image/"
            },
            {
                name : "Spiral Matrix",
                link : "https://leetcode.com/problems/spiral-matrix/"
            }]
    },
    {
        dataStructure : "Bit Manipulation",
        questions : [
            {
                name : "Number of 1 Bits",
                link : "https://leetcode.com/problems/number-of-1-bits/"
            }]
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