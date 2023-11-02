import { Suspense } from "react";
import Revenue from '@/container/Revenue'
import Loading from "./loading";

export default function Home() {
  return (
    <div className='w-full pt-16 xl-1:max-w-[72.5rem] xl-1:mx-auto'>
      <Suspense fallback={<Loading />}>
        <Revenue/>
      </Suspense>
    </div>
  )
}
