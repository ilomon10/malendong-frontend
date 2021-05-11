import { AdminProvider } from "./hoc";
import Layout from "./Layout";
import Settings from "./Settings";
import Users from "./Users";

const Navigation = [
  {
    "title": "Nama Servis",
    "text": "Users",
    "component": Users,
    "path": "/users",
    "icon": "person"
  },
  {
    "title": "Nama Servis",
    "text": "Settings",
    "component": Settings,
    "path": "/settings",
    "icon": "cog"
  }
]

const Admin = () => {
  return (
    <AdminProvider navigation={Navigation}>
      <Layout />
    </AdminProvider>
  )
}

export default Admin;