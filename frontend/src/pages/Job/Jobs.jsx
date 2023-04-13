import "./Jobs.css"
import Linear from "../../assets/Companies/LinearLogo.png"
import Notion from "../../assets/Companies/NotionLogo.png"
import Spline from "../../assets/Companies/SplineLogo.png"
import Raycast from "../../assets/Companies/RaycastLogo.png"
import Loom from "../../assets/Companies/LoomLogo.png"
import Trainline from "../../assets/Companies/TrainlineLogo.png"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import JobGuy from "../../assets/JobGuy.png"

const searchFilter = [
    {
        title: "Location",
        filters: ["Near me", "Remote Job", "Exact Location", "Within 15 km", "Within 30 km", "Within 50 km"]
    },
    {
        title: "Salary",
        filters: ["Any", "> 30000k", "> 50000k", "> 80000k", "> 100000k"]
    },
    {
        title: "Date",
        filters: ["All time", "Last 24 hours", "Last 3 days", "Last 7 days"]
    },
    {
        title: "Experience",
        filters: ["Any experience", "Intership", "Work remotely"]
    },
    {
        title: "Employment",
        filters: ["Full-time", "Temporary", "Part-time"]
    }
]
const companies = [
    {
        logo: Linear,
        name : "Linear company",
        position : "Software Engineer",
        location : "Brussels",
        type : "Full time",
        salary : "50-55k",
        date : "29 min ago",
        description : "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt."
    },
    {
        logo: Notion,
        name : "Notion",
        position : "Junior UI Designer",
        location : "Madrid",
        type : "Full time",
        salary : "30-32k",
        date : "1 day ago",
        description : "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt."
    },
    {
        logo: Spline,
        name : "Spline studio",
        position : "Technical Support Engineer",
        location : "United States",
        type : "Full time",
        salary : "50-52k",
        date : "1 day ago",
        description : "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt."
    },
    {
        logo: Raycast,
        name : "Raycast corp",
        position : "Product Designer",
        location : "London",
        type : "Full time",
        salary : "40-42k",
        date : "2 day ago",
        description : "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt."
    },
    {
        logo: Loom,
        name : "Loom",
        position : "Copywriter (Growth)",
        location : "London",
        type : "Full time",
        salary : "38-40k",
        date : "3 day ago",
        description : "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt."
    },
    {
        logo: Trainline,
        name : "Trainline group",
        position : "Senior UX/UI Designer",
        location : "Paris",
        type : "Full time",
        salary : "38-40k",
        date : "4 day ago",
        description : "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt."
    }
]

function Jobs(){
    return(
        <div className="jobs" >
            <Navbar position="relative"/>

            <div className="jobs-heading">
                <img className="jobs-heading-img" src={JobGuy} alt="" />
                <div className="jobs-heading-text">
                    <h1 className="jobs-heading-main" >Find Job!</h1>
                    <p className="jobs-heading-body">Appli offers you different jobs opportunities to help you find work related to your field and area!</p>
                </div>
            </div>

            <div className="job-search">
                <input className="search-item job-position" type="text" name="" id="" placeholder="What position you looking for ?" />
                <input className="search-item"type="text" placeholder="Location" />
                <button className="job-search-btn" type="submit">Search job</button>
            </div>

            <div className="find-job-section">
                <div className="job-filter">
                    <h3>Filters</h3>
                    {searchFilter.map( (search) =>{
                        return(
                            <ul>
                                <p className="filter-title">{search.title}</p>
                                <li>{search.filters.map( filter =>{
                                    return(
                                        <li>{filter}</li>
                                    )
                                })}</li>
                            </ul>
                        )
                    })}        
                </div>

                <div className="open-jobs">
                    <h2>3177 Jobs</h2>
                    {companies.map((company) =>{
                        return(
                            <div className="company">
                                <img className="" src={company.logo} alt="" />
                                <div>
                                    <p>Linear company</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
            
            <Footer />
        </div>
    )
}
export default Jobs