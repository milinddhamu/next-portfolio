import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
export const Footer = () => {
  return (
    <footer className="my-6">
            <div className=" mx-auto flex flex-col justify-center items-center py-2 text-gray-500 gap-2 w-full max-w-screen-md">
                <div className="flex flex-row">
                <p>&copy; {new Date().getFullYear()}&nbsp;|&nbsp;</p>
                <a className="text-blue-500" href="/contact">Contact</a>
                </div>
            </div>
        </footer>
  )
}