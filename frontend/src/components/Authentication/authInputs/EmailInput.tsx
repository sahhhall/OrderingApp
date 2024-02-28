import { Input } from "@/components/UI/input";

type EmailInputProps = {
    label:string;
    type:string;
    name:string;
    value:string;
    changeHandler: ( event: React.ChangeEvent<HTMLInputElement>) => void;
}


const EmailInput = ( props: EmailInputProps ) => {
    return(
        <>
             <label>
                {props.label}
                <Input type={props.value} name={props.name} value={props.value} onChange={props.changeHandler} />
            </label>
        </>
    )
}

export default EmailInput;