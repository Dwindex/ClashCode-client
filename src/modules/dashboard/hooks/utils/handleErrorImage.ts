import assets from "@/lib/assets";

type ImageEvent = React.SyntheticEvent<HTMLImageElement,Event>;

export const handleImageError = (e:ImageEvent) => {
    (e.target as HTMLImageElement).src = assets.Images.profile.dummyImage
}