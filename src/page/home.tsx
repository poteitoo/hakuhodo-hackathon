import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Header } from "../components/Header";

type CreateAccountCardProps = {
  title: string;
  subtitle: string;
  linkTo: string;
};

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center md:h-screen my-5">
      <Header />
      <div className="md:flex-row flex gap-5 flex-col">
        <CreateAccountCard
          title="クラブオーナー"
          subtitle="クラブチームを組織するためにアカウントを作成する"
          linkTo="create-club-owner"
        />
        <CreateAccountCard
          title="クラブメンバー"
          subtitle="クラブチームのメンバーになるためにアカウントを作成する"
          linkTo="create-club-member"
        />
        <CreateAccountCard
          title="サーポーター"
          subtitle="クラブチームを支援するためにアカウントを作成する"
          linkTo="create-supporter"
        />
      </div>
    </div>
  );
};

export const CreateAccountCard = ({
  title,
  subtitle,
  linkTo,
}: CreateAccountCardProps) => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>
      <CardBody>
        <Text fontWeight={500}>{subtitle}</Text>
      </CardBody>
      <CardFooter>
        <Link as={ReactRouterLink} to={linkTo}>
          <Button>アカウント作成</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
