import { FC, Ref } from "react";

import { portfolio } from "@/config";
import Image from "next/image";

import { contactsData } from "@/components/Cards/ContactsCard/data";
import SvgIcons from "@/components/ui/SvgIcon/SvgIcon";

import Ava from "../../../../public/images/ava.jpeg";
import styles from "./styles.module.css";

interface ContactsCardProps {
  ref?: Ref<HTMLDivElement>;
}

const ContactsCard: FC<ContactsCardProps> = ({ ref }) => {
  return (
    <div ref={ref} className={styles.ContactsCard}>
      <div className={styles.Container}>
        <Image
          height={250}
          width={266}
          placeholder="blur"
          className={styles.Avatar}
          src={Ava}
          alt={portfolio.title.label}
        />
        <h2 className={styles.Title}>{portfolio.title.label}</h2>
        <p className={styles.Description}>{portfolio.title.description}</p>

        <hr />
        <div className={styles.Creator}>
          {contactsData.map(({ link, image }) => {
            return (
              <a key={image} href={link} target={"_blank"}>
                <SvgIcons
                  classes={{
                    root: styles.Link,
                  }}
                  name={image}
                  size={"40px"}
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactsCard;
