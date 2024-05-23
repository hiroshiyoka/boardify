import { create } from "@/actions/createBoard";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";

const OrganizationPage = async () => {
  const boards = await db.board.findMany();

  return (
    <div>
      <form action={create}>
        <input
          id="title"
          name="title"
          required
          placeholder="Enter a board title"
          className="border-black border p-1"
        />
      </form>
      <Button type="submit">Submit</Button>
    </div>
  );
};

export default OrganizationPage;
