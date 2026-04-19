import Card from "../MyProjectsPage/components/Card"
import { ProjectData } from "../../data/data"
export default function MyProjectsPage() {
    
    return (
        <div className="bg-cover bg-center min-h-screen">
            <div className="flex flex-col pt-12 lg:pt-42 items-center gap-2">
                <span className="text-white text-4xl text-center font-bold" style={{ "fontFamily": "Inter" }}>What Is My Projects?</span>
            </div>
            <div className={`flex flex-row flex-wrap items-center justify-center gap-4 mt-4 `}>
                {
                    ProjectData.map((data,index)=>{
                        return (
                            <Card key={index} projectTitle={data.projectTitle} projectLogo={data.projectLogo} techStacks={data.techStacks} description={data.description} isOpenSource={data.isOpenSource} url={data.url}/>
                        )
                    })
                }
            </div>

        </div>
    )
}