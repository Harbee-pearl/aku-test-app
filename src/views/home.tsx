"use client";

import cn from "@/utils/class-names";
import {
  Button,
  Field,
  Fieldset,
  Input,
  Label,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function HomeComponent() {
  const type = localStorage.getItem("user-type") ?? "user";
  const { push } = useRouter();
  const [selected, setSelected] = useState(type);
  const [searchValue, setSearchValue] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    localStorage.setItem("userType", selected);
    push(`/search/${searchValue}`);
  }
  return (
    <form
      role="form"
      onSubmit={handleSubmit}
      className="w-full max-w-xl bg-white rounded-lg px-6 py-10 space-y-5"
    >
      <Field>
        <Label htmlFor="type" className={"block mb-3"}>
          Search Type
        </Label>
        <RadioGroup
          id="type"
          value={selected}
          onChange={setSelected}
          aria-label="Search Type"
          className={"flex items-center gap-6"}
        >
          <Field className="flex items-center gap-2">
            <Radio
              value={"user"}
              className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-primary data-[disabled]:bg-gray-100"
            >
              <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
            </Radio>
            <Label className="data-[disabled]:opacity-50">User</Label>
          </Field>
          <Field className="flex items-center gap-2">
            <Radio
              value={"org"}
              className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-primary data-[disabled]:bg-gray-100"
            >
              <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
            </Radio>
            <Label className="data-[disabled]:opacity-50">Organization</Label>
          </Field>
        </RadioGroup>
      </Field>
      <Field>
        <Label
          htmlFor="search-input"
          className="text-sm font-medium text-gray-500"
        >
          Search
        </Label>
        <Input
          id="search-input"
          className={cn(
            "mt-3 block w-full rounded-lg border border-gray-500 bg-gray/300 py-2.5 px-4 text-base text-gray-500",
            "focus:outline-none data-[focus]:outline-none"
          )}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </Field>
      <div>
        <Button
          type="submit"
          disabled={!searchValue}
          className="bg-primary rounded-lg w-full text-white data-[hover]:bg-primary/85 data-[disabled]:bg-primary/75 data-[disabled]:cursor-not-allowed py-2.5 px-5"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}

export default HomeComponent;
