import Link from "next/link"
const Breadcrumb = ({ pageName }) => {
  return (
    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
      {/* <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {pageName}
      </h2> */}

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium" href="/">
              Dashboard /
            </Link>
          </li>
          <li className="font-semibold text-secColor">{pageName}</li>
        </ol>
      </nav>
    </div>
  )
}

export default Breadcrumb
