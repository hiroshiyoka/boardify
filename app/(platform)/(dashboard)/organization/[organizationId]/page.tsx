import { db } from "@/lib/db";

const OrganizationPage = async () => {
  const boards = await db.board.findMany();

  return <div className="flex flex-col space-y-4"></div>;
};

export default OrganizationPage;
