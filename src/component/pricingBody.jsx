import ToggleButton from "./ToggleButton";
import CheckMark from "./checkMark";
import CustomButton from "./CustomButton";
import GetStarted from "./Getstarted";
import monzo from "../utils/monzo.png";
import scale from "../utils/scale.png";
import remote from "../utils/remote.png";
import supercell from "../utils/supercell.png";
import ramp from "../utils/ramp.png";
import togetherai from "../utils/togetherai.png";
const PricingBody = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black text-white pt-36 pb-20">
      <h1 className="text-7xl font-bold mb-6">Pricing</h1>
      <p className="text-[24px] text-gray-400 mb-4 text-center w-6/12">
        Use Linear for free with your whole team. Upgrade to enable <br />{" "}
        unlimited issues, enhanced security controls, and additional features.
      </p>
      <div className="flex-row mx-11 rounded-lg mt-9 pb-16">
        <table className="w-6xl text-left bg-neutral-900 rounded-xl overflow-hidden">
          <thead className="whitespace-nowrap">
            <tr>
              <th className="w-3/12 border-[1px] border-neutral-800">
                <div className="flex flex-col">
                  <div className="flex flex-col p-6">
                    <h1 className="text-3xl mb-2">Free</h1>
                    <p className="font-semibold text-[20px] text-gray-300">
                      $0
                    </p>
                  </div>
                  <div className="border-y-[1px] px-7 py-5 w-full border-neutral-800">
                    <p className="text-gray-600 font-medium">
                      Free for everyone
                    </p>
                  </div>
                </div>
              </th>
              <th className="w-3/12 border-[1px] border-neutral-800 font-semibold">
                <div className="flex flex-col">
                  <div className="flex flex-col p-6">
                    <h1 className="text-3xl mb-2">Basic</h1>
                    <p className="font-semibold text-[20px] text-gray-300">
                      $8 per user/month
                    </p>
                  </div>
                  <div className="flex space-x-2 border-y-[1px] px-6 py-5 w-full border-neutral-800">
                    <ToggleButton />
                    <p className="text-gray-600 font-medium">Billed yearly</p>
                  </div>
                </div>
              </th>
              <th className="w-3/12 border-[1px] border-neutral-800 font-semibold">
                <div className="flex flex-col">
                  <div className="flex flex-col p-6">
                    <h1 className="text-3xl mb-2">Business</h1>
                    <p className="font-semibold text-[20px] text-gray-300">
                      $14 per user/month
                    </p>
                  </div>
                  <div className="flex space-x-2 border-y-[1px] px-6 py-5 w-full border-neutral-800">
                    <ToggleButton />
                    <p className="text-gray-600 font-medium">Billed yearly</p>
                  </div>
                </div>
              </th>
              <th className="w-3/12 border-[1px] border-neutral-800 font-semibold rounded-tr-lg">
                <div className="flex flex-col">
                  <div className="flex flex-col p-6">
                    <h1 className="text-3xl mb-2">Enterprise</h1>
                    <p className="font-semibold text-[20px] text-gray-300">
                      Contact us
                    </p>
                  </div>
                  <div className="border-y-[1px] px-6 py-5 w-full border-neutral-800">
                    <p className="text-gray-600 font-medium">
                      Annual billing only
                    </p>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-400 text-[16px] mb-10">
            <tr>
              <td className="align-top px-6 border-r-[1px] border-neutral-800">
                <div className="flex flex-col space-y-8 mt-8">
                  <div className="flex items-center space-x-2">
                    <CheckMark />
                    <p>Unlimited members</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckMark />
                    <p>2 teams</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckMark />
                    <p>250 issues</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckMark />
                    <p>
                      <span className="underline">Slack</span> and{" "}
                      <span className="underline">Github</span>
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckMark />
                    <p>API access</p>
                  </div>
                </div>
              </td>
              <td className="align-top px-6 border-r-[1px] border-neutral-800">
                <div className="flex flex-col space-y-8 mt-8">
                  <div className="flex items-center space-x-2">
                    <CheckMark />
                    <p>All Free features +</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckMark />
                    <p>5 teams</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckMark />
                    <p>Unlimited issues</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckMark />
                    <p>Unlimited file uploads</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckMark />
                    <p>Admin roles</p>
                  </div>
                </div>
              </td>
              <td className="align-top px-6 border-r-[1px] border-neutral-800">
                <div className="flex flex-col space-y-8 mt-8">
                  <div className="flex items-center space-x-2">
                    <CheckMark />
                    <p>All Basic feature +</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckMark />
                    <p className="underline underline-offset-2">Linear Asks</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckMark />
                    <p>Unlimited teams</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckMark />
                    <p>Private teams and guests</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckMark />
                    <p>Linear Insights</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckMark />
                    <p>Triangle responsibility</p>
                  </div>
                  <div className="flex items-start mt-[2px] space-x-2">
                    <CheckMark />
                    <p>
                      Zendesk and Intercom
                      <br />
                      integration
                    </p>
                  </div>
                </div>
              </td>
              <td className="align-top px-6 pb-36">
                <div className="flex flex-col space-y-8 mt-8">
                  <div className="flex items-center space-x-2">
                    <CheckMark />
                    <p>All Business features +</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckMark />
                    <p className="underline underline-offset-2">
                      Advanced Linear Asks
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckMark />
                    <p>Issue SLAs</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckMark />
                    <p>SAML and SCIM</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckMark />
                    <p>Advanced security</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckMark />
                    <p>Migration and onboarding support</p>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="align-top px-6 border-r-[1px] border-neutral-800">
                <div className="flex items-center justify-center space-y-8 mt-8">
                  <GetStarted title={"Get started"} />
                </div>
              </td>
              <td className="align-top px-6 border-r-[1px] border-neutral-800">
                <div className="flex items-center justify-center space-y-8 mt-8">
                  <GetStarted title={"Get started"} />
                </div>
              </td>
              <td className="align-top px-6 border-r-[1px] border-neutral-800">
                <div className="flex items-center justify-center space-y-8 mt-8">
                  <GetStarted
                    title={"Get started"}
                    className={"bg-white text-black"}
                    nohover={true}
                  />
                </div>
              </td>
              <td className="align-top px-6 border-r-[1px] border-neutral-800 pb-16">
                <div className="flex items-center justify-center space-y-8 mt-8">
                  <GetStarted title={"Request trail"} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-center justify-center mt-16 w-5xl">
        <p className="text-gray-500 font-semibold text-[18px]">
          Powering the world’s best product teams
        </p>
        <div className="relative w-full overflow-hidden mt-6">
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <div className="marquee-container w-full mt-4">
            <div className="marquee-content space-x-10">
              <img src={monzo} alt="monzo" className="inline-block w-48 h-36" />
              <img src={scale} alt="scale" className="inline-block w-48 h-36" />
              <img
                src={remote}
                alt="remote"
                className="inline-block w-48 h-20"
              />
              <img
                src={supercell}
                alt="supercell"
                className="inline-block w-40 h-20"
              />
              <img src={ramp} alt="ramp" className="inline-block w-48 h-36" />
              <img
                src={togetherai}
                alt="togetherai"
                className="inline-block w-48 h-40"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingBody;
