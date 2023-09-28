import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Search as SearchIcon } from "lucide-react";

import Button from "../../../common/components/button";
import Textarea from "../../../common/components/textarea";

import classes from "./style.module.css";

const FormSchema = z.object({
    search: z.string().nonempty(),
});

type FormState = z.infer<typeof FormSchema>;

export default function SearchBar() {
    const { register, setValue, watch, handleSubmit } = useForm<FormState>({
        resolver: zodResolver(FormSchema),
    });

    function onSubmit(data: FormState) {
        console.log(data);
    }

    return (
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            {/* Value needs to be passed separately since, useForm doesn't pass it */}
            <Textarea
                {...register("search")}
                value={watch("search")}
                name="search"
                onClear={() => setValue("search", "")}
                startIcon={
                    <span>
                        <SearchIcon
                            color={"var(--clr-border-hover)"}
                            size={"1rem"}
                        />
                    </span>
                }
            />
            <div className={classes.actions}>
                <Button type="submit">Google Search</Button>
                <Button type="button">I'm Feeling Lucky</Button>
            </div>
        </form>
    );
}
