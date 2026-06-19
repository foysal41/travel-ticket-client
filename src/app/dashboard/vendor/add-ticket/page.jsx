"use client";

import { createTicket } from "@/app/lib/actions/createTicket";
import { useSession } from "@/lib/auth-client";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AddTicket = () => {
  const [logoUrl, setLogoUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const { data: session } = useSession();
  const user = session?.user;

  const handleLogoUpload = async (e) => {
    const file = e.target.files[0];
    // console.log("DEBUG 1 - Selected file:", file);

    if(!file){
        toast.error("please upload Ticket Image")
        return;
    }
    if(file.size > 2 * 1024 * 1024){
        toast.error("Image size must be less than 2MB");
        // console.log("DEBUG 2 - File too large:", file.size);
        return;
    }

    setIsUploading(true);
    const imageData = new FormData();
    imageData.append("image", file)

    try{
        const imageUploadKey = process.env.NEXT_PUBLIC_IMAGE_UPLOAD_API;
        // console.log("DEBUG 3 - ImgBB key exists:", !!imageUploadKey);

        const res = await fetch( `https://api.imgbb.com/1/upload?key=${imageUploadKey}`,{
            method: "POST",
            body: imageData,
        })
        const data = await res.json();
        //  console.log("DEBUG 4 - ImgBB response:", data);

        if(data.success){
            setLogoUrl(data.data.url)
            toast.success("Image uploaded successfully");
        }else{
             toast.error("Image upload failed");
        }

    }catch(error){
        toast.error("Image upload error from server");
    }finally{
        setIsUploading(false)
    }
  
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const ticket = Object.fromEntries(formData.entries());
    // console.log(user)

    // Form Validation
    if (
      !ticket.title ||
      !ticket.from ||
      !ticket.to ||
      !ticket.transportType ||
      !ticket.price ||
      !ticket.quantity ||
      !ticket.departureDateTime
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    const payload = {
      ...ticket,
      image: logoUrl,
      verificationStatus: "pending",
    };
    const res = await createTicket(payload);
    if (res.insertedId) {
      toast.success("Ticket Create Successfull!");
      e.target.reset();
      redirect("/dashboard/vendor");
    }
  };
  return (
    <main className="min-h-screen  px-4 py-8">
      <div className="">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Add New Ticket</h1>
          <p className="mt-2 text-sm text-gray-500">
            Fill in the details below to add a new travel ticket.
          </p>
        </div>

        <form onSubmit={formSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Card className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-semibold text-gray-900">
                Ticket Information
              </h2>

              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Ticket Title
                  </label>
                  <input
                    name="title"
                    type="text"
                    placeholder="Enter ticket title"
                    className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      From Location
                    </label>
                    <input
                      name="from"
                      type="text"
                      placeholder="Enter starting location"
                      className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      To Location
                    </label>
                    <input
                      name="to"
                      type="text"
                      placeholder="Enter destination"
                      className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Transport Type
                    </label>
                    <select
                      name="transportType"
                      className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none focus:border-blue-500"
                    >
                      <option value="">Select transport type</option>
                      <option value="bus">Bus</option>
                      <option value="train">Train</option>
                      <option value="launch">Launch</option>
                      <option value="plane">Plane</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Price Per Ticket
                    </label>
                    <input
                      name="price"
                      type="number"
                      placeholder="Enter price"
                      className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Ticket Quantity
                    </label>
                    <input
                      name="quantity"
                      type="number"
                      placeholder="Enter ticket quantity"
                      className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Departure Date & Time
                    </label>
                    <input
                      name="departureDateTime"
                      type="datetime-local"
                      className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-semibold text-gray-900">
                Ticket Perks
              </h2>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {[
                  "AC",
                  "Breakfast",
                  "WiFi",
                  "Charging Port",
                  "Window Seat",
                  "Water Bottle",
                ].map((perk) => (
                  <label
                    key={perk}
                    className="flex h-14 cursor-pointer items-center justify-between rounded-xl border border-gray-300 bg-white px-4 text-sm font-medium text-gray-700 transition hover:border-blue-500 hover:bg-blue-50"
                  >
                    <span>{perk}</span>
                    <input
                      type="checkbox"
                      name="perks"
                      value={perk}
                      className="h-4 w-4 accent-blue-600"
                    />
                  </label>
                ))}
              </div>

              <p className="mt-5 text-sm text-gray-500">
                Select all the perks that are included with this ticket.
              </p>
            </Card>
          </div>

          <Card className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold text-gray-900">
              Upload Ticket Image
            </h2>

            <label className="flex min-h-48 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-blue-300 bg-blue-50/40 px-6 py-10 text-center transition hover:bg-blue-50">
              <input
                name="image"
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                disabled={isUploading}
                className="hidden"
              />

           

              {/* Preview Image */}
              {logoUrl && (
                <Image
                  src={logoUrl}
                  alt="Ticket Preview"
                  className="mb-4 h-36 w-60 rounded-xl object-cover shadow"
                 width={240}  height={144}
                 
                />
              )}
            

              {/* Upload Status */}
              <p className="font-semibold text-gray-900">
                {isUploading
                  ? "Uploading image..."
                  : logoUrl
                    ? "Image Uploaded Successfully"
                    : "Drag & drop image here"}
              </p>

              <p className="mt-1 text-sm text-blue-600">
                {logoUrl ? "Click to change image" : "or click to browse"}
              </p>

              <p className="mt-2 text-xs text-gray-500">
                PNG, JPG or WEBP allowed (Max 5MB)
              </p>
            </label>
          </Card>

          <Card className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold text-gray-900">
              Vendor Information
            </h2>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Vendor Name
                </label>
                <input
                  name="vendorName"
                  type="text"
                  value={user?.name || ""}
                  readOnly
                  className="h-12 w-full rounded-xl border border-gray-300 bg-gray-100 px-4 text-sm text-gray-700 outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Vendor Email
                </label>
                <input
                  name="vendorEmail"
                  type="email"
                  value={user?.email || ""}
                  readOnly
                  className="h-12 w-full rounded-xl border border-gray-300 bg-gray-100 px-4 text-sm text-gray-700 outline-none"
                />
              </div>
            </div>
          </Card>

          <Button
            type="submit"
            className="h-12 w-full rounded-xl bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Add Ticket
          </Button>
        </form>
      </div>
    </main>
  );
};

export default AddTicket;
