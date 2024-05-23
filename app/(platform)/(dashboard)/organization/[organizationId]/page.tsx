import { create } from "@/actions/createBoard";
import { Button } from "@/components/ui/button";

const OrganizationPage = () => {
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
