import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Homepage = () => {
  return (
    <div className="p-5 border border-white rounded-xl">
      <h1 className="text-red-500"> Hello World</h1>
      <Button>Clique Aqui </Button>
      <Input placeholder="Fechar o projeto " />
    </div>
  );
};

export default Homepage;
