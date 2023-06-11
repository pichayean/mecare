import Navbar from "../../components/Navbar.jsx";
export default function Review() {
  const posts = [
    {
      id: 1,
      title: "ใช้บริการ พยาบาลเฝ้าไข้ช่วยได้เยอะเลยค่ะ",
      href: "#",
      description:
        "กลางคืนไม่มีคนช่วยเฝ้าไข้คุณยาย ได้ mecare ช่วยไว้เยอะเลย ขอบคุณเจ้าหน้าที่ทุกคนมากนะคะ",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "พยาบาลวิชาชีพ", href: "#" },
      author: {
        name: "ลูกค้าประจำเลย",
        role: "ลูกค้า",
        href: "#",
        imageUrl:
          "https://hrod.ipst.ac.th/wp-content/uploads/2020/09/163001-feature-img-2-680x445.png",
      },
    },
    {
      id: 1,
      title: "ขอบคุณในคุณภาพการบริการมากค่ะ",
      href: "#",
      description:
        "ขอบคุณ careme มากที่ช่วยเหลือในเวลาที่ยากลำบาก เจ้าหน้าที่ดูแลคุณแม่ด้วยความอ่อนโยน คุณแม่ไว้ใจ ช่วยลดความยากลำบากของครอบครัวเรามากเลยค่ะ.",
      date: "Mar 17, 2021",
      datetime: "2020-03-16",
      category: { title: "ผู้ช่วยพยาบาล", href: "#" },
      author: {
        name: "ลูกค้าใน กทม",
        role: "ลูกค้า",
        href: "#",
        imageUrl:
          "https://png.pngtree.com/thumb_back/fw800/background/20210909/pngtree-business-office-worker-white-collar-worker-smiling-at-work-image_836792.jpg",
      },
    },
    {
      id: 1,
      title: "ใช้บริการดูแลผู้ป่วยติดเดียง",
      href: "#",
      description:
        "ใช้บริการดูแลผู้ป่วยติดเดียง กับทาง mecare ช่วยเหลือครอบครัวได้เยอะเลยค่ะ",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "ผู้ช่วยดูแล", href: "#" },
      author: {
        name: "ขอบคุณจากใจ",
        role: "ลูกค้า",
        href: "#",
        imageUrl:
          "https://www.shutterstock.com/image-photo/proud-office-worker-posing-laughing-260nw-1028703628.jpg",
      },
    },
  ];
  return (
    <>
      <Navbar />
      {/* <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img
            className="mx-auto h-12"
            src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
            alt=""
          />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                “ขอบคุณ Platform ดีๆที่ช่วยให้
                เราหาพยาบาลมาดูแลแม่เราได้ในวันที่เราไม่สะดวก
                ช่วยชีวิตเรามากเลยนะคะ พัฒนาต่อไปนะคะ.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Judith Black</div>
                <svg
                  viewBox="0 0 2 2"
                  width={3}
                  height={3}
                  aria-hidden="true"
                  className="fill-gray-900"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">Customer</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section> */}

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              รีวิวจากผู้ใช้บริการ
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              ตัวอย่าง รีวิวจากผู้ใช้บริการจริง
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={post.author.imageUrl}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
