import FileInput from "@/app/components/fileUpload";
import { Button, Card, cn } from "@heroui/react";
import React from "react";
import PictureCard from "./PictureCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

interface Props {
  next: () => void;
  prev: () => void;
  className?: string;
  images: File[];
  setImages: (images: File[]) => void;
}

const Picture = (props: Props) => {
  return (
    <Card className={cn("p-3", props.className)}>
      <FileInput
        onSelect={(e) =>
          props.setImages([(e as any).target.files[0], ...props.images])
        }
      />
      <div className="flex gap-3 flex-wrap">
        {props.images.map((image, index) => {
          const srcUrl = URL.createObjectURL(image);
          return (
            <PictureCard
              key={srcUrl}
              src={srcUrl}
              index={index}
              onDelete={(i) =>
                props.setImages([
                  ...props.images.slice(0, i),
                  ...props.images.slice(i + 1),
                ])
              }
            />
          );
        })}
      </div>
      <div className="flex justify-center col-span-3 gap-3 mt-3">
        <Button
          onClick={props.prev}
          startContent={<ChevronLeftIcon className="w-6" />}
          color="primary"
          className="w-36"
        >
          Previous
        </Button>
        <Button
          onClick={props.next}
          endContent={<ChevronRightIcon className="w-6" />}
          color="primary"
          className="w-36"
        >
          Next
        </Button>
      </div>
    </Card>
  );
};

export default Picture;
