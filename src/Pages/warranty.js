import * as React from "react";
export default function WarrantyGrid() {
  return (
    <div
      className="home-container">
	        <header className="header">
            <span className="head">Warranty Information</span>
            <h2 className="heading">Protect Your Investment</h2>
        </header>
      <div className="py-20">
        <div className="xl:container m-auto px-6 text-white md:px-12 xl:px-6">
          <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
		  <div className="rgroup relative rounded-3xl space-y-6 border border-gray-500 p-8 text-left">
              <img
                className="mx-auto h-[14rem] w-full object-top"
                src="https://marvel-b1-cdn.bc0a.com/f00000000229966/duro-last.com/media/informational_pages/Warranties/duro-last-warranties-3.png"
                href="/media/marketing/literature/Protecting_Your_Investment_Booklet.pdf"
                target="_blank"
                alt="water spilling"
                width="220"
                loading="lazy"
              />
              <p className="text-white-600">
                The best way to ensure a long-lasting, watertight roof is to
                protect your investment with routine housekeeping and
                inspection. A simple and basic roof maintenance program will
                help protect your investment by eliminating costly repairs, as
                well as, potential damages to your building. Click{" "}
                <a href="/media/marketing/literature/Protecting_Your_Investment_Booklet.pdf">
                  here
                </a>{" "}
                to learn more tips for setting up a general maintenance program.
              </p>

            </div>
			<div className="rgroup relative rounded-3xl space-y-6 border border-gray-500 p-8 text-left">
			  <div><h5 className="mb-4 text-xl font-bold text-white md:text-2xl">More Information</h5></div>
                <img
                  className="mx-auto h-[12rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  src="https://marvel-b1-cdn.bc0a.com/f00000000229966/duro-last.com/media/informational_pages/Warranties/duro-last-warranties-1.png"
                  href="https://specs.duro-last.com/#warranty"
                  target="_blank"
                  alt="user avatar"
                  height="220"
                  width="220"
                  loading="lazy"
                />
              <p className="text-white-600">
                  Click the image to see a list of all warranties Duro-Last offers
                  and a sample of each.
                </p>
            </div>
		  <div className="rgroup relative rounded-3xl space-y-6 border border-gray-500 p-8 text-left">
			  <div><h5 className="mb-2 text-lg font-bold text-white md:text-xl">Inspection</h5></div>
            <img
              className="mx-auto h-[12rem] w-full object-top"
              src="https://marvel-b1-cdn.bc0a.com/f00000000229966/duro-last.com/media/informational_pages/Warranties/duro-last-warranties-2.png"
              href="/media/marketing/literature/maintenance_checklist.pdf"
              alt="roofing"
              loading="lazy"
              target="_blank"
              height="220"
              width="220"
            />
              <p className="text-white-600">
				Upon completion of a commercial job, a Duro-Last Quality Assurance Technical Representative will inspect the Duro-Last Roofing
              System. Click <a href="/media/marketing/literature/maintenance_checklist.pdf">here</a> to access the Owners Maintenance Checklist and learn what you can do to help protect your Duro-Last Roofing System.
            </p>
          </div>
        </div>
		</div>
      </div>
    </div>
  );
}
