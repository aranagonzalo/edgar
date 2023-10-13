"use client"
import React from 'react'
import Image from 'next/image';
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"


const formSchema = z.object({
  firstname: z.string().min(5, {
    message: "El nombre debe contener al menos 2 caracteres.",
  }),
})


const ContactForm = () => {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
        firstname: "",
        lastname: "",
        },
    })

    function onSubmit(values) {
        console.log(values);
    }

  return (
    <div id="form" className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto bg-slate-200 overflow-hidden bg-layered-waves">
        <Image alt="background" src="/layered-waves2.svg" fill className="-z-10 object-cover object-bottom"/>
        <div className="absolute -rotate-[16deg] top-20 xl:-left-[42%] -left-1/4 bg-form-bg bg-repeat-round -z-10 w-[90%] h-[100%]" />
        <div className="flex flex-col flex-[1.3] padding-x items-center justify-center">
            <h1 className="2xl:text-[68px] xl:pt-0 pt-36 lg:text-left text-center sm:text-[40px] text-[36px] font-bold leading-snug text-indigo-900">
                ¿Estás buscando iniciar el proceso de alquiler?
            </h1>
            <p className="text-2xl font-semibold mt-10">
                ¡Contáctanos para ayudarte a encontrar los que necesitas!
            </p>
        </div>
         <div className="xl:flex-[1.7] flex justify-center items-center w-full xl:h-[80vh] lg:mt-10 xl:pb-0 pb-36">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-[60%] space-y-5">
                    <FormField
                    control={form.control}
                    name="firstname"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nombre</FormLabel>
                            <FormControl>
                                <Input placeholder="Juan Perez" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Correo electrónico</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="juanperez@miempresa.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <div className="flex space-x-5">
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                            <FormItem className="w-1/2">
                                <FormLabel>Celular</FormLabel>
                                <FormControl>
                                <Input placeholder="987 654 321" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="ruc"
                            render={({ field }) => (
                            <FormItem className="w-1/2">
                                <FormLabel>RUC 20</FormLabel>
                                <FormControl>
                                <Input placeholder="10987654327" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mensaje</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Buenas tardes, estoy en busqueda de..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit" className="mt-4">Enviar</Button>
                </form>
            </Form>
         </div>
    </div>
  )
}

export default ContactForm;