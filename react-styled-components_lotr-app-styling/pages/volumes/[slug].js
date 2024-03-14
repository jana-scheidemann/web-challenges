import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;

const StyledH1 = styled.h1`
  color: var(--color-clouds);
  font: var(--font-headline-1);
`;

const StyledP = styled.p`
  color: var(--color-smoke);
`;

const StyledListItem = styled.li`
  color: var(--color-smoke);
  font-family: serif;
  font: var(--font-caption);
`;

const StyledLink = styled(Link)`
  color: var(--color-clouds);
`;

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books, color } = volume;

  return (
    <>
      <StyledDiv $backgroundColor={color}>
        <StyledLink href="/volumes">← All Volumes</StyledLink>
        <StyledH1>{title}</StyledH1>
        <StyledP>{description}</StyledP>
        <ul>
          {books.map(({ ordinal, title }) => (
            <StyledListItem key={title}>
              {ordinal}: <strong>{title}</strong>
            </StyledListItem>
          ))}
        </ul>
        <Image
          src={cover}
          alt={`Cover image of ${title}`}
          width={140}
          height={230}
        />
        {previousVolume ? (
          <div>
            <StyledLink href={`/volumes/${previousVolume.slug}`}>
              ← Previous Volume: {previousVolume.title}
            </StyledLink>
          </div>
        ) : null}
        {nextVolume ? (
          <div>
            <StyledLink href={`/volumes/${nextVolume.slug}`}>
              Next Volume: {nextVolume.title} →
            </StyledLink>
          </div>
        ) : null}
      </StyledDiv>
    </>
  );
}
