import { useRouter } from "next/router"
function ClientProject(){
const router=useRouter();
return<div><h1>clientProject {router.query?.projectId}</h1></div>
}
export default ClientProject