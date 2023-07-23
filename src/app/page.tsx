"use client"
import { ProjectCard, LayoutStoreGroup } from '@/GlobalComponents/Card';
import { ProjectDetailBasic , ProjectDetailAdvance ,ProjectDetailIntermediate , ProjectDetail} from '@/DataHandler/ProjectDetail';
import { useRouter } from 'next/navigation'


export default function Home() {
  let navigation:any = useRouter()
  return ( 
    <main>
      <LayoutStoreGroup title="basic">
        {ProjectDetailBasic.map((e:ProjectDetail , i:number , k:Array<ProjectDetail>)=>{
          return <ProjectCard  key={e._id} name={e.name} description={e.description} img={e.img} onClick={()=>{navigation.push(e.route)}}/>
        })}
      </LayoutStoreGroup>
      <LayoutStoreGroup title="intermediate">
      {ProjectDetailIntermediate.map((e:ProjectDetail , i:number , k:Array<ProjectDetail>)=>{
          return <ProjectCard  key={e._id} name={e.name} description={e.description} img={e.img} onClick={()=>{navigation.push(e.route)}}/>
        })}
      </LayoutStoreGroup>
      <LayoutStoreGroup title="advance">
      {ProjectDetailAdvance.map((e:ProjectDetail , i:number , k:Array<ProjectDetail>)=>{
          return <ProjectCard  key={e._id} name={e.name} description={e.description} img={e.img} onClick={()=>{navigation.push(e.route)}}/>
        })}
      </LayoutStoreGroup>
    </main>
  )
}
