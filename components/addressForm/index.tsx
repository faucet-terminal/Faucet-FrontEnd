
import {useForm} from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from 'zod';

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

type Props = {
    isValidating ?: boolean,
    isInValid ?: boolean,
    setIsInValid ?: (arg : boolean) => void,
    setIsValidating ?: (arg : boolean) => void
}

const formSchema = z.object({
    walletAddress: z.string().startsWith('0x',{message: "Wrong Wallet Address syntax."}).length(42,{
        message : "WalletAddress must be 42 characters."
    })
  })

export function AddressForm({ isValidating, isInValid, setIsInValid, setIsValidating} : Props) {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            walletAddress: ""
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
      //  setIsValidating(true);

        const result = fetch('xxx', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify({ walletAddress: values.walletAddress }), 
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              return data
            })
            .catch((e) => {
              console.error(e);
            });

       // setIsInValid(await result);
       // setIsValidating(false);
    }

    const blockStyle = {
        backgroundColor : !isValidating &&  !isInValid ?   '#F87870' : '#06DB83'
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="walletAddress"
                    render={({field }) => (
                        <FormItem className=' grid grid-cols-3 gap-x-2 p-2'>
                            <FormLabel>
                                <div className='flex items-center justify-center gap-2 p-2 border rounded-full h-10 mt-2'>
                                    <div className='bg-gray-200 w-5 h-5 rounded-md transition-all' style={blockStyle}></div>
                                    <div>Address</div>
                                </div>
                            </FormLabel>
                            <FormControl className='col-span-2'>
                                <Input placeholder='0x' className='m-0 rounded-full' {...field} onKeyDown={(e) => {
                                    if(e.key === 'Enter') {
                                        e.preventDefault();
                                        form.handleSubmit(onSubmit)();
                                    }
                                }}  />
                            </FormControl>
                            <FormDescription className='col-start-2'>
                                Type enter to validate your address
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                {/* <Button type='submit'>验证</Button> */}
            </form>
        </Form>
    )
}
