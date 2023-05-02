import "./Jobs.css"
import Linear from "../../assets/jobs/Companies/LinearLogo.png"
import Notion from "../../assets/jobs/Companies/NotionLogo.png"
import Spline from "../../assets/jobs/Companies/SplineLogo.png"
import Raycast from "../../assets/jobs/Companies/RaycastLogo.png"
import Loom from "../../assets/jobs/Companies/LoomLogo.png"
import Trainline from "../../assets/jobs/Companies/TrainlineLogo.png"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import JobGuy from "../../assets/jobs/JobGuy.png"

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
        description : "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod."
    },
    {
        logo: Notion,
        name : "Notion",
        position : "Junior UI Designer",
        location : "Madrid",
        type : "Full time",
        salary : "30-32k",
        date : "1 day ago",
        description : "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod."
    },
    {
        logo: Spline,
        name : "Spline studio",
        position : "Technical Support Engineer",
        location : "United States",
        type : "Full time",
        salary : "50-52k",
        date : "1 day ago",
        description : "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod."
    },
    {
        logo: Raycast,
        name : "Raycast corp",
        position : "Product Designer",
        location : "London",
        type : "Full time",
        salary : "40-42k",
        date : "2 day ago",
        description : "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod."
    },
    {
        logo: Loom,
        name : "Loom",
        position : "Copywriter (Growth)",
        location : "London",
        type : "Full time",
        salary : "38-40k",
        date : "3 day ago",
        description : "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod."
    },
    {
        logo: Trainline,
        name : "Trainline group",
        position : "Senior UX/UI Designer",
        location : "Paris",
        type : "Full time",
        salary : "38-40k",
        date : "4 day ago",
        description : "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod."
    }
]

function Jobs(){
    return(
        <div className="jobs" >
            <Navbar position="relative"/>

            <div className="jobs-heading">
                <img className="jobs-heading-img" src={JobGuy} alt="" />
                <div className="jobs-heading-text">
                    <h1 className="jobs-heading-main" >Find Jobs!</h1>
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
                    <h3 className="job-filter-title">Filters</h3>
                    {searchFilter.map( (search) =>{
                        return(
                            <div className="filter-section">
                                <p className="filter-title">{search.title}</p>
                            {search.filters.map((filter) =>{
                                return(
                                    <div className="filter-checkbox">
                                        <input type="checkbox" name="" id={filter} />
                                        <label htmlFor={filter}>{" " + filter}</label>
                                    </div>
                                )
                            })}
                            </div>
                            )    
                    })}        
                </div>

                <div className="open-jobs">
                    <div className="open-jobs-title">
                        <h2>3177 Jobs</h2>
                        <input className="filter-by" type="text" value="Filter By" placeholder="Filter By" />
                    </div>
                    
                    {companies.map((company) =>{
                        return(
                            <div className="company">
                                <img className="company-logo" src={company.logo} alt="" />
                                <div className="company-info2">
                                    <p>{company.name}</p>
                                    <p className="job-title" >{company.position}</p>
                                    <div className="job-flex" >
                                        <p>{company.location}</p>
                                        <p>.</p>
                                        <p>{company.type}</p>
                                        <p>.</p>
                                        <p>{company.salary}</p>
                                        <p>.</p>
                                        <p>{company.date}</p>
                                    </div>
                                    <p>{company.description}</p>
                                </div>
                            </div>
                        )
                    })}

                    <div className="job-next-pages">
                        <button className="next-page">{"<"}</button>
                        <button className="next-page"> 1 </button>
                        <button className="next-page"> 2 </button>
                        <button className="next-page"> 3 </button>
                        <button className="next-page"> 4 </button>
                        <button className="next-page"> 5 </button>
                        <button className="next-page">{">"}</button>
                    </div>
                </div>
                <div className="subcribe">
                    <div className="subcribe-box">
                        <h3 className="subcribe-title">Email me for jobs</h3>
                        <p className="subcribe-boby">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, harum? Quae cupiditate ipsum quaerat quis tempore laboriosam?</p>
                        <input className="get-email" type="email" placeholder="email@gmail.com" />
                        <button className="subcribe-btn">Subcribe</button>
                    </div>
                    <div  className="subcribe-box">
                        <h3 className="subcribe-title">Get noticed faster</h3>
                        <p className="subcribe-boby">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, harum?</p>
                        <button className="subcribe-btn">Upload our resume</button>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}
export default Jobs