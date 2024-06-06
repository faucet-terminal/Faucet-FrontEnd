import { auth } from "@/auth";
import AdminTable from "@/components/admin/crypto-currency-table";
import { Button } from "@nextui-org/button";
import { UserRole } from "@prisma/client";
import Link from "next/link";

const AdminPage = async () => {
  const authInfo = await auth()
  if (authInfo?.user.role !== UserRole.ADMIN) {
    return <div className="text-center">
      <h1 className="bold text-xl">Access Denied</h1>
      <h2>You do not have the necessary permissions to view this page.</h2>
      <Button as={Link} href="/" className="my-6">Back Home</Button>
    </div>
  }
  return <AdminTable />;
};

export default AdminPage;
