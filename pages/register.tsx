import { InputText } from '@/components';
import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import useInput from '../hooks/useInput';
type RegisterProps = {};

const Register = (props: RegisterProps) => {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-screen items-center ">
        <div className="flex flex-col w-full justify-center -pt-20 items-center">
          <div className="flex ">
            <div className="relative md:w-[570px] w-72 h-32 md:h-60">
              <Image
                src="./logo.svg"
                alt="logo"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="flex flex-col pt-16 h-full items-between">
            <div>
              <div className="md:w-[520px] h-12  md:h-16 ">
                <InputText type="Username" onChange={setEmail} />
              </div>
            </div>
            <div className="py-4">
              <div className="md:w-[520px] w-72 h-12 md:h-16 ">
                <InputText type="Password" onChange={setPassword} />
              </div>
            </div>
          </div>
          <div className="pt-4">
            <div className="md:w-[165px] w-28 h-10 md:w-72  md:h-[60px] ">
              <Button text="Register" />
            </div>
          </div>
          <div className="py-2">
            <Link href="/login">
              <p className="underline font-normal md:text-xl">
                Click Here to login !
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
