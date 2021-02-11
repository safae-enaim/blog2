<?php

namespace App\DataFixtures;

use App\Entity\Article;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Faker\Factory;


class ArticleFixtures  extends Fixture
{

    public function load(ObjectManager $manager)
    {
        $faker = Factory::create('fr_FR');
        $faker->seed(0);
        /* Users */
       
        for ($i = 0; $i < 20; $i++) {
            $article = new Article();
            $article
                ->setDate($faker->text(10))
                ->setTitre($faker->text(20))
                ->setSoustitre($faker->realText(30))
                ->setContenu($faker->realText(500))
                ->setImage($faker->imageUrl())
                ->setCategorie($faker->text(10))
                ->setAuteur($faker->lastName);
            $manager->persist($article);
            $articles[] = $article;
            $manager->flush();
        }

    }
}